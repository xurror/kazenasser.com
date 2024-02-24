# Define custom function directory
ARG FUNCTION_DIR="/function"

# Build Args
ARG USE_CHROME_STABLE
ARG PUPPETEER_CHROMIUM_REVISION
ARG PUPPETEER_VERSION

FROM browserless/base:1.61.0

FROM node:20-buster as build-image

# Required for Node runtimes which use npm@8.6.0+ because
# by default npm writes logs under /home/.npm and Lambda fs is read-only
ENV NPM_CONFIG_CACHE=/tmp/.npm

# Include global arg in this stage of the build
ARG FUNCTION_DIR

# Install build dependencies
RUN apt-get update && \
    apt-get install -y \
    g++ \
    make \
    cmake \
    unzip \
    libcurl4-openssl-dev

# Copy function code
RUN mkdir -p ${FUNCTION_DIR}
COPY package.json ${FUNCTION_DIR}
COPY yarn.lock ${FUNCTION_DIR}
COPY index.js ${FUNCTION_DIR}sp

WORKDIR ${FUNCTION_DIR}

# update base
# RUN apt-get update 
RUN apt-get install -y wget unzip

# Install Chrome Browser
RUN wget -q https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing/120.0.6099.109/linux64/chrome-linux64.zip
RUN unzip -o chrome-linux64.zip
RUN mv chrome-linux64 chrome
# COPY chrome-linux64 ${FUNCTION_DIR}/chrome

RUN wget -q https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing/120.0.6099.109/linux64/chromedriver-linux64.zip
RUN unzip -o chromedriver-linux64.zip
RUN mv chromedriver-linux64/chromedriver .

# install dependencies
RUN yarn install

# Install the runtime interface client
RUN yarn add aws-lambda-ric

# Set runtime interface client as default command for the container runtime
ENTRYPOINT ["/usr/local/bin/npx", "aws-lambda-ric"]
# Pass the name of the function handler as an argument to the runtime
CMD ["index.handler"]
