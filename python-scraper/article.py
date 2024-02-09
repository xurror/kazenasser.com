import datetime

class Article:
    domain: str
    title: str
    description: str
    link: str
    date: datetime.date

    def __init__(self, domain, title, description, link, date):
        self.domain = domain
        self.title = title
        self.description = description
        self.link = link
        self.date = date

    def __str__(self):
        return f"Article(domain={self.domain}, title={self.title}, description={self.description}, link={self.link}, date={self.date})"

    def __repr__(self):
        return self.__str__()
    
    def get_date_str(self):
        return self.date.strftime("%d.%m.%Y") if self.date else '-'
    
    @staticmethod
    def sort_by_date(obj_list):
        return sorted(obj_list, key=lambda x: x.date, reverse=True)
    