FROM golang:1.22

WORKDIR /app

COPY go.mod .
COPY main.go .

RUN go get
RUN go build -o bin .

EXPOSE 4000

ENTRYPOINT ["/app/bin"]

