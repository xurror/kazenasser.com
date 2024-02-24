package main

import (
	"encoding/json"
	"fmt"
	"github.com/markusmobius/go-dateparser"
	"log"
	"os"
	"strings"
	"time"

	"github.com/gocolly/colly/v2"
)

type NewsArticle struct {
	Domain      string
	Title       string
	Description string
	Link        string
	Date        string
}

type NewsSource struct {
	Competitor      string
	Website         string
	GoogleSearchUrl string `json:"search_url"`
}

func main() {
	// Your code here
	content, err := os.ReadFile("../sources.json")
	if err != nil {
		log.Fatalf("Error reading file: %v", err)
	}

	var sources []NewsSource
	err = json.Unmarshal(content, &sources)
	if err != nil {
		log.Fatalf("Error unmarshalling JSON: %v", err)
	}

	//for _, source := range sources {
	//	log.Printf("Competitor: %s, Website: %s, Google Search URL: %s", source.Competitor, source.Website, source.GoogleSearchUrl)
	//}

	//firstSource := sources[0]
	c := colly.NewCollector(
	//colly.AllowedDomains("*.google.de", "*.google.com"),
	//colly.AllowURLRevisit(),
	//colly.Async(true),
	)

	err = c.Limit(&colly.LimitRule{
		// Filter domains affected by this rule
		DomainGlob: "*",
		// Set a delay between requests to these domains
		Delay: 1 * time.Second,
		// Add an additional random delay
		RandomDelay: 1 * time.Second,
	})
	if err != nil {
		print(err)
		return
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
		log.Print("\n")

		link := strings.Replace(e.Attr("href"), "/url?q=", "", 1)
		log.Print("Link: ", link)

		var date string
		e.ForEach("div>div>div>span", func(i int, ce *colly.HTMLElement) {
			date = ce.Text
			log.Print("Date: ", date)
		})
		dt, _ := dateparser.Parse(nil, date)
		parsedDate := dt.Time.Format("02.01.2006")
		log.Print("Parsed Date: ", parsedDate)

		var title string
		e.ForEach("div>div>div>h3", func(i int, ce *colly.HTMLElement) {
			title = ce.Text
			log.Print("Title: ", title)
		})

		var description string
		e.ForEach("div>div>div>div>div", func(i int, ce *colly.HTMLElement) {
			if strings.Contains(ce.Text, date) {
				description = strings.ReplaceAll(ce.Text, date, "")
			}
			log.Print("Description: ", description)
		})

		var domain string
		e.ForEach("div>div>div>div", func(i int, ce *colly.HTMLElement) {
			if !strings.Contains(ce.Text, description) {
				domain = ce.Text
				log.Print("Domain: ", domain)
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
			return
		}
	}

	print("Data Extracts: ", dataExtracts)
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
		GoogleSearchUrl: "consent page",
	}
}
