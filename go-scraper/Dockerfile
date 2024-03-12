# syntax=docker/dockerfile:1

FROM golang:1.20 as builder

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY *.go sources.json ./

# Build
RUN CGO_ENABLED=0 GOOS=linux go build -tags lambda.norpc -o main main.go

 # Copy artifacts to a clean image
FROM public.ecr.aws/lambda/provided:al2023

COPY --from=builder /app/main /app/sources.json ./

ENTRYPOINT [ "./main" ]

