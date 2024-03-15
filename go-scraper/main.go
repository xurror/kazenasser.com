package main

import (
	"bytes"
	"context"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"sort"
	"strconv"
	"strings"
	"time"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/gocolly/colly/v2"
	"github.com/mailjet/mailjet-apiv3-go/v4"
	"github.com/markusmobius/go-dateparser"
	"github.com/markusmobius/go-dateparser/date"
	"github.com/xuri/excelize/v2"
)

type NewsArticle struct {
	Domain      string
	Title       string
	Description string
	Link        string
	Date        date.Date
}

type NewsArticles []NewsArticle

func (p NewsArticles) Len() int {
    return len(p)
}

func (p NewsArticles) Less(i, j int) bool {
  return p[i].Date.Time.After(p[j].Date.Time)
}

func (p NewsArticles) Swap(i, j int) {
    p[i], p[j] = p[j], p[i]
}

type NewsSource struct {
	Competitor      string
	Website         string
	GoogleSearchUrl string `json:"search_url"`
}

func handler(ctx context.Context, event events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
  run()

  response := events.APIGatewayProxyResponse{
		StatusCode: 200,
		Body:       "\"Successfully Generated and Dispatched Competitor News!\"",
	}
	return response, nil
}

func main() {
  lambda.Start(handler)
  // run()
}

func run() {
  // Your code here
	content, err := os.ReadFile("sources.json")
	if err != nil {
		log.Fatalf("Error reading file: %v\n", err)
	}

	var sources []NewsSource
	err = json.Unmarshal(content, &sources)
	if err != nil {
		log.Fatalf("Error unmarshalling JSON: %v\n", err)
	}

  fmt.Printf("Loaded %v news sources from JSON file\n", len(sources))

	scrapedNews := scrapeNews(sources)

  if len(scrapedNews) == 0 {
    log.Fatalf("No news was scraped")
  }

  fileBuffer := writeNewsToExcel(scrapedNews)

  dispatchMails(time.Now().Format("02.01.2006") + "-news.xlsx", base64.StdEncoding.EncodeToString(fileBuffer.Bytes()))
}

func scrapeNews(sources []NewsSource) map[string][]NewsArticle {
	c := colly.NewCollector(
	// colly.AllowedDomains("*.google.de", "*.google.com"),
	  colly.AllowURLRevisit(),
	  // colly.Async(true),
	)

	err := c.Limit(&colly.LimitRule{
		// Filter domains affected by this rule
		DomainGlob: "*",
    Parallelism: 3,
		// Set a delay between requests to these domains
		// Delay: 1 * time.Second,
		// Add an additional random delay
		// RandomDelay: 1 * time.Second,
	})
	if err != nil {
		print(err)
		return nil
	}

	c.OnHTML("form[action='https://consent.google.de/save']", func(e *colly.HTMLElement) {
		var data = map[string]string{}
		e.ForEach("input", func(i int, e *colly.HTMLElement) {
			data[e.Attr("name")] = e.Attr("value")
		})

		err = e.Request.Post(e.Attr("action"), data)
		if err != nil {
			return
		}

	})

	var dataExtracts = map[string][]NewsArticle{}
	c.OnHTML("div#main > div > div > a", func(e *colly.HTMLElement) {
		fmt.Print("\n")

    href := e.Attr("href")
		link := strings.Replace(href, "/url?q=", "", 1)
    link = strings.Split(link, "&sa=")[0]
		fmt.Print("Link: ", link)

		var date string
		e.ForEach("div>div>div>span", func(i int, ce *colly.HTMLElement) {
			date = ce.Text
			fmt.Print("Date: ", date)
		})
		parsedDate, _ := dateparser.Parse(nil, date)
		// parsedDate := dt.Time.Format("02.01.2006")
		fmt.Print("Parsed Date: ", parsedDate)

		var title string
		e.ForEach("div>div>div>h3", func(i int, ce *colly.HTMLElement) {
			title = ce.Text
			fmt.Print("Title: ", title)
		})

		var description string
		e.ForEach("div>div>div>div>div", func(i int, ce *colly.HTMLElement) {
			if strings.Contains(ce.Text, date) {
				description = strings.ReplaceAll(ce.Text, date, "")
			}
			fmt.Print("Description: ", description)
		})

		var domain string
		e.ForEach("div>div>div>div", func(i int, ce *colly.HTMLElement) {
			if !strings.Contains(ce.Text, description) {
				domain = ce.Text
				fmt.Print("Domain: ", domain)
			}
		})

		newsArticle := NewsArticle{
			Domain:      domain,
			Title:       title,
			Description: description,
			Link:        link,
			Date:        parsedDate,
		}

		newsSource := getNewSourceFromUrl(sources, e.Request.URL.String())
		sourceExtracts, ok := dataExtracts[newsSource.Competitor]
		if !ok {
			dataExtracts[newsSource.Competitor] = []NewsArticle{newsArticle}
		} else {
			dataExtracts[newsSource.Competitor] = append(sourceExtracts, newsArticle)
		}
	})

	var visitMap = map[string]int{}
	c.OnRequest(func(r *colly.Request) {
		source := getNewSourceFromUrl(sources, r.URL.String())
		visits, ok := visitMap[source.Competitor]
		if ok {
			if visits > 0 {
				r.Abort()
			}
			visitMap[source.Competitor] = visits + 1
		} else {
			visitMap[source.Competitor] = 1
		}
		fmt.Printf("Scraping: %s - URL: %s\n", source.Competitor, source.GoogleSearchUrl)
	})

	// Start scraping on https://www.google.com/search?q=competitor+site:competitor.com
	for _, source := range sources {
		err = c.Visit(source.GoogleSearchUrl)
		if err != nil {
			return nil
		}
	}

  // Wait until threads are finished
	c.Wait()

	return dataExtracts
}

func writeNewsToExcel(data map[string][]NewsArticle) (fileBuffer *bytes.Buffer) {
	f := excelize.NewFile()
	defer func() {
		if err := f.Close(); err != nil {
      fmt.Printf("Error closing sheet: %v\n", err)
		}
	}()

	// Create a new sheet.
	sheet := "Competitor News"
	index, err := f.NewSheet(sheet)
	if err != nil {
    log.Fatalf("Error creating new xlsx sheet: %v\n", err)
	}

	defaultStyle, _ := f.NewStyle(&excelize.Style{
		Font: &excelize.Font{Size: 11},
	})

	boldStyle, _ := f.NewStyle(&excelize.Style{
		Font:       &excelize.Font{Size: 11, Bold: true},
		Protection: &excelize.Protection{Locked: true},
	})

	_ = f.SetColStyle(sheet, "A", defaultStyle)
	_ = f.SetColStyle(sheet, "B", defaultStyle)
	_ = f.SetColStyle(sheet, "C", defaultStyle)
	_ = f.SetColStyle(sheet, "D", defaultStyle)
	_ = f.SetColStyle(sheet, "E", defaultStyle)
	_ = f.SetColStyle(sheet, "F", defaultStyle)

	_ = f.SetColWidth(sheet, "A", "A", 5)
	_ = f.SetColWidth(sheet, "B", "B", 12)
	_ = f.SetColWidth(sheet, "C", "C", 85)
	_ = f.SetColWidth(sheet, "D", "D", 120)
	_ = f.SetColWidth(sheet, "E", "E", 30)
	_ = f.SetColWidth(sheet, "F", "F", 50)

	row := 1
	for source, news := range data {
		_ = f.SetCellValue(sheet, "A"+strconv.Itoa(row), source)
		_ = f.MergeCell(sheet, "A"+strconv.Itoa(row), "F"+strconv.Itoa(row))
		_ = f.SetRowStyle(sheet, row, row, boldStyle)

		_ = f.SetCellValue(sheet, "A"+fmt.Sprint(row+1), "No")
		_ = f.SetCellValue(sheet, "B"+fmt.Sprint(row+1), "Date")
		_ = f.SetCellValue(sheet, "C"+fmt.Sprint(row+1), "Title")
		_ = f.SetCellValue(sheet, "D"+fmt.Sprint(row+1), "Description")
		_ = f.SetCellValue(sheet, "E"+fmt.Sprint(row+1), "Domain")
		_ = f.SetCellValue(sheet, "F"+fmt.Sprint(row+1), "Link")
		_ = f.SetRowStyle(sheet, row+1, row+1, boldStyle)

    sortedNews := make(NewsArticles, 0, len(news))
    for _, d := range news {
        sortedNews = append(sortedNews, d)
    }
    sort.Sort(sortedNews)
		for j, article := range sortedNews {
			_ = f.SetCellValue(sheet, "A"+fmt.Sprint(row+j+2), j+1)
			_ = f.SetCellValue(sheet, "B"+fmt.Sprint(row+j+2), article.Date.Time.Format("02.01.2006"))
			_ = f.SetCellValue(sheet, "C"+fmt.Sprint(row+j+2), article.Title)
			_ = f.SetCellValue(sheet, "D"+fmt.Sprint(row+j+2), article.Description)
			_ = f.SetCellValue(sheet, "E"+fmt.Sprint(row+j+2), article.Domain)
			_ = f.SetCellValue(sheet, "F"+fmt.Sprint(row+j+2), article.Link)
		}
		row += len(news) + 2
		_ = f.InsertRows(sheet, row, 1)
		row++

		fmt.Printf("Done writing %v extracts to excel\n", source)
	}

	// Set active sheet of the workbook.
	f.SetActiveSheet(index)
	// Save spreadsheet by the given path.

  // delete the default sheet "Sheet1"
  err = f.DeleteSheet("Sheet1")
  if err != nil {
    log.Fatalf("Error deleting Default sheet: %v\n", err)
  }

  fileBuffer, err = f.WriteToBuffer()
  if err != nil {
     log.Fatalf("Error creating xlsx file: %v\n", err)
  }

  return fileBuffer
}

func getNewSourceFromUrl(sources []NewsSource, url string) NewsSource {
	for _, source := range sources {
		if url == source.GoogleSearchUrl {
			return source
		}
	}
	return NewsSource{
		Competitor:      "consent page",
		Website:         "consent page",
		GoogleSearchUrl: url,
	}
}

func dispatchMails(filename string, attachment string) {
  publicKey := os.Getenv("MJ_APIKEY_PUBLIC")
  privateKey := os.Getenv("MJ_APIKEY_PRIVATE")

  mj := mailjet.NewMailjetClient(publicKey, privateKey)

  messages := mailjet.MessagesV31{
    Info: []mailjet.InfoMessagesV31{
      {
        From: &mailjet.RecipientV31{
          Email: "no-reply@app.linus-finance.com",
          Name: "LINUS News Scraper",
        },
        To: &mailjet.RecipientsV31{
          mailjet.RecipientV31{
            Email: "daniel.ebert@linus-finance.com",
            Name: "Daniel Ebert",
          },
          mailjet.RecipientV31{
            Email: "tom.grobien@linus-finance.com",
            Name: "Tom Grobien",
          },
          mailjet.RecipientV31{
            Email: "noah.kiesel@linus-finance.com",
            Name: "Noah Kiesel",
          },
          mailjet.RecipientV31{
            Email: "salim.buggle@linus-finance.com",
            Name: "Salim Bugglé",
          },
          mailjet.RecipientV31{
            Email: "klemens.kuhn@linus-finance.com",
            Name: "Klemens Kuhn",
          },
          mailjet.RecipientV31{
            Email: "lukas.endl@linus-finance.com",
            Name: "Lukas Endl",
          },
          mailjet.RecipientV31{
            Email: "lucas.boventer@linus-finance.com",
            Name: "Lucas Boventer",
          },
          mailjet.RecipientV31{
            Email: "christopher.danwerth@linus-finance.com",
            Name: "Christopher Danwerth",
          },
          // mailjet.RecipientV31{
          //   Email: "nasser.kaze@linus-finance.com",
          //   Name: "Nasser Kaze",
          // },
        },
        Cc: &mailjet.RecipientsV31{
          mailjet.RecipientV31{
            Email: "nasser.kaze@linus-finance.com",
            Name: "Nasser Kaze",
          },
        },
        Subject: "Ihre Bi-Weekly Competitor-News-Überblick!",
        TextPart: "Competitor News from Scraper Service!",
        HTMLPart: "<h3>Bi-weekly News Overview</h3><p>Please find attached the bi-weekly news overview.</p>",
        Attachments: &mailjet.AttachmentsV31{
          mailjet.AttachmentV31{
            ContentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            Filename: filename,
            Base64Content: attachment,
          },
        },
      },
    },
  }

  res, err := mj.SendMailV31(&messages)
  if err != nil {
    log.Fatalf("Error Sending email: %v\n", err)
  }
  fmt.Printf("MJ Res: %+v\n", res)
}

