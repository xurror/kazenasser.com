import os
from mailjet_rest import Client

# Get your environment Mailjet keys
API_KEY = os.environ['MJ_APIKEY_PUBLIC']
API_SECRET = os.environ['MJ_APIKEY_PRIVATE']

mailjet = Client(auth=(API_KEY, API_SECRET), version='v3.1')

recipients = [
    {
        'Email': 'tom.grobien@linus-finance.com',
        'Name': 'Tom Grobien'
    },
    {
        'Email': 'noah.kiesel@linus-finance.com',
        'Name': 'Noah Kiesel'
    },
    {
        'Email': 'salim.buggle@linus-finance.com',
        'Name': 'Salim Bugglé'
    },
    {
        'Email': 'klemens.kuhn@linus-finance.com',
        'Name': 'Klemens Kuhn'
    },
    {
        'Email': 'lukas.endl@linus-finance.com',
        'Name': 'Lukas Endl'
    },
    {
        'Email': 'lucas.boventer@linus-finance.com',
        'Name': 'Lucas Boventer'
    },
    {
        'Email': 'christopher.danwerth@linus-finance.com',
        'Name': 'Christopher Danwerth'
    },
]

cc = [
        {
            'Email': 'nasser.kaze@linus-finance.com',
            'Name': 'Nasser Kaze'
        }
    ]

def send_email(filename, attachment):
    data = {
        'Messages': [
            {
                'From': {
                    'Email': 'no-reply@app.linus-finance.com',
                    'Name': 'LINUS News Scraper'
                },
                'To': recipients,
                "Cc": cc,
                'Subject': 'Ihre Bi-Weekly Competitor-News-Überblick!',
                'TextPart': 'Competitor News from Scraper Service!',
                'HTMLPart': """
                    <h3>Bi-weekly News Overview</h3>
                    <p>Please find attached the bi-weekly news overview.</p>
                """,
                'Attachments': [
                    {
                        'ContentType': 'application/octet-stream',
                        'Filename': filename,
                        'Base64Content': attachment
                    }
                ]
            }
        ]
    }

    print("Sending email...")
    result = mailjet.send.create(data=data)
    print(f"Sending email... Done! with status ${result.status_code}")
