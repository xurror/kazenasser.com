import base64
import json
import sys
from exporter import export_news
from mailjet import send_email

from scraper import Scraper

def handler(event, context):
    with open('../sources.json') as f:
        sources = json.load(f)
        
    scraper = Scraper()

    scraped_news = scraper.scrape_news(sources)
    filename = export_news(scraped_news)

    scraper.close()

    with open(f'./{filename}', "rb") as file:
        encoded_string = str(base64.b64encode(file.read()))
        encoded_string = encoded_string.replace("b'", "").replace("'", "")
        send_email(filename, encoded_string)

    return 'Hello from AWS Lambda using Python' + sys.version + '!'

if __name__ == '__main__':
    handler(None, None)

