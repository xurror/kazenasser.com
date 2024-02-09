FROM public.ecr.aws/lambda/python:3.6

# Setup
RUN yum update -y
RUN yum install -y \
    gcc \
    openssl-devel \
    zlib-devel \
    libffi-devel \
    wget && \
    yum -y clean all
RUN yum -y groupinstall development


RUN wget https://chromedriver.storage.googleapis.com/2.37/chromedriver_linux64.zip
RUN unzip chromedriver_linux64.zip

RUN curl -SL https://github.com/adieuadieu/serverless-chrome/releases/download/v1.0.0-37/stable-headless-chromium-amazonlinux-2017-03.zip > headless-chromium.zip
RUN unzip headless-chromium.zip
RUN rm *.zip


# Copy requirements.txt
COPY requirements.txt ${LAMBDA_TASK_ROOT}

# Install the specified packages
RUN pip install -r requirements.txt

# Copy function code
COPY exporter.py ${LAMBDA_TASK_ROOT}
COPY scraper.py ${LAMBDA_TASK_ROOT}
COPY sources.json ${LAMBDA_TASK_ROOT}
COPY main.py ${LAMBDA_TASK_ROOT}

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "main.handler" ]
