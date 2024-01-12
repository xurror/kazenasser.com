import json
import sys
from exporter import export_news

from scraper import Scraper

def handler(event, context):
    with open('source.json') as f:
        sources = json.load(f)
        
    scraper = Scraper()

    scraped_news = scraper.scrape_news(sources)
    export_news(scraped_news)
    
    scraper.close()

    return 'Hello from AWS Lambda using Python' + sys.version + '!'

if __name__ == '__main__':
    handler(None, None)
