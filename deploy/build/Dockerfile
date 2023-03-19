FROM golang:1.19-alpine AS builder

WORKDIR /app
COPY . .

ARG SERVICE_NAME

RUN CGO_ENABLED=0 GOOS=linux go build -ldflags "-s -w" -o /app/bin ./services/${SERVICE_NAME}/cmd/${SERVICE_NAME}/*.go

FROM scratch AS prod
COPY --from=builder /app/bin bin

EXPOSE 8080

ENTRYPOINT ["./bin"]