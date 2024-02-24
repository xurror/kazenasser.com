// Require the package

const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const xlsx = require('xlsx') 

const googleNewsScraper = async (inputUrl) => {
    const url = `${inputUrl} when:${'7d'}`
        console.log(`SCRAPING NEWS FROM: ${url}`);
    const requiredArgs = [
        // '--disable-extensions-except=/path/to/manifest/folder/',
        // '--load-extension=/path/to/manifest/folder/',
    ];
    const puppeteerConfig = {
        headless: true,
        // executablePath: './chrome/chrome',
        args: puppeteer.defaultArgs().concat([]).filter(Boolean).concat(requiredArgs)
    }
    const browser = await puppeteer.launch(puppeteerConfig)
    const page = await browser.newPage()
    page.setViewport({ width: 1366, height: 768 })
    page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36')
    page.setRequestInterception(true)
    page.on('request', request => {
        if (!request.isNavigationRequest()) {
            request.continue()
            return
        }
        const headers = request.headers()
        headers['Accept'] = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'
        headers['Accept-Encoding'] = 'gzip'
        headers['Accept-Language'] = 'en-US,en;q=0.9,es;q=0.8'
        headers['Upgrade-Insecure-Requests'] = 1
        headers['Referer'] = 'https://www.google.com/'
        request.continue({ headers })
    })
    await page.setCookie({
        name: "CONSENT",
        value: `YES+cb.${new Date().toISOString().split('T')[0].replace(/-/g,'')}-04-p0.en-GB+FX+667`,
        domain: ".google.com"
    });
    await page.goto(inputUrl, { waitUntil: 'networkidle2' });

    try {
        await page.$(`[aria-label="Reject all"]`);
        await Promise.all([
            page.click(`[aria-label="Reject all"]`), 
            page.waitForNavigation({waitUntil: 'networkidle2'})
        ]);
    } catch (err) {
        console.log("ERROR REJECTING COOKIES:", err);
    }

    const content = await page.content();
    const $ = cheerio.load(content);

    const articles = $('article');
    let results = []
    let i = 0
    const urlChecklist = []

    $(articles).each(function() {
        const link = $(this).find('a[href^="./article"]').attr('href').replace('./', 'https://news.google.com/') || false
        link && urlChecklist.push(link);
        const srcset = $(this).find('figure').find('img').attr('srcset')?.split(' ');
        const image = srcset && srcset.length 
            ? srcset[srcset.length-2] 
            : $(this).find('figure').find('img').attr('src');
        const mainArticle = {
            "title": $(this).find('h4').text() || $(this).find('div > div + div > div a').text(),
            "link": link,
            "image": image,
            "source": $(this).find('div[data-n-tid]').text() || false,
            "datetime": new Date($(this).find('div:last-child time').attr('datetime')) || false,
            "time": $(this).find('div:last-child time').text() || false,
        }
        results.push(mainArticle)
        i++
    })

    // if (config.prettyURLs) {
    //     results = await Promise.all(results.map(article => {
    //         return fetch(article.link).then(res => res.text()).then(data => {
    //             const _$ = cheerio.load(data)
    //             article.link = _$('c-wiz a[rel=nofollow]').attr('href')
    //             return article
    //         })
    //     }))
    // }

    await page.close()
    await browser.close()

    return results.filter(result => result.title)

}

exports.handler = async (event) => {
    // Execute within an async function, pass a config object (further documentation below)
    const newResponse = await googleNewsScraper(
        'https://news.google.com/search?q=LINUS%20Digital%20Finance&hl=en-US&gl=US&ceid=US%3Aen'
    )

    console.log(newResponse)

    // Reading our test file 
    const file = xlsx.readFile('./test.xlsx')
    
    const ws = reader.utils.json_to_sheet(student_data) 
  
    reader.utils.book_append_sheet(file, ws, "Sheet3") 
    
    // Writing to our file 
    reader.writeFile(file,'./test.xlsx') 

    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
        other: newResponse
    };
    return response;
};
