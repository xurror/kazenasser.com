from typing import Dict, List
import dateparser
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

from article import Article

# browser_path = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser' # './old_drivers/headless-chromium'


class Scraper:
    __driver_path = './chromedriver'
    # __browser_path = './chrome/chrome'
    # __browser_path = './headless-chromium'
    __browser_path = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser'
    browser = None

    def __init__(self):
        self.browser = self.init_driver()

    def init_driver(self):
        options = Options()
        options.headless = True
        options.binary_location = self.__browser_path
        
        options.add_argument('--headless')
        options.add_argument('--no-sandbox')
        # options.add_argument('--single-process')
        options.add_argument('--disable-dev-shm-usage')

        return webdriver.Chrome(executable_path=self.__driver_path, options=options)

    def scrape_news(self, sources) -> List[Dict[str, List[Article]]]:
        news_per_source = {}

        for source in sources:
            print("Competitor:", source['competitor'])
            print("Website:", source['website'])
            print("Google News URL:", source['search_url'])
            print("-"*50+"\n\n"+"-"*50)

            news_per_source[source['competitor']] = []

            self.browser.get(source['search_url'])
            time.sleep(2)

            try:
                consent_button = self.browser.find_element(By.CSS_SELECTOR, "form[action='https://consent.google.de/save']")  # noqa: E501
                print("Consent Form - ", consent_button)
                if consent_button:
                    consent_button.submit()
            except Exception as e:
                print("No Consent Form")

            time.sleep(5)

            news_results = self.browser.find_elements(By.CSS_SELECTOR, 'div#rso > div > div > div > div')
            print("News Results:", len(news_results))
            for news_div in news_results:
                news_item = []
                try:
                    news_link = news_div.find_element(By.TAG_NAME, 'a').get_attribute('href')
                    divs_inside_news = news_div.find_elements(By.CSS_SELECTOR, 'a>div>div>div')

                    for new in divs_inside_news:
                        news_item.append(new.text)

                    article = Article(
                        link = news_link,
                        domain = news_item[1],
                        title = news_item[2],
                        description = news_item[3],
                        date = dateparser.parse(news_item[4])
                    )
                    news_per_source[source['competitor']].append(article)

                    print("Link:", article.link)
                    print("Domain:", article.domain)
                    print("Title:", article.title)
                    print("Description:", article.description)
                    print("Date:", article.get_date_str())

                    print("-"*50+"\n\n"+"-"*50)

                except Exception as e:
                    print("No Elements")
            
            print("\n\n ############################### \n\n")

        return news_per_source

    def close(self):
        self.browser.quit()
