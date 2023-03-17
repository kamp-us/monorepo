FROM golang:1.19-alpine AS builder

WORKDIR /app
COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -ldflags "-s -w" -o /app/vanity-server

RUN apk add upx
RUN upx --ultra-brute /app/vanity-server

FROM scratch AS prod
COPY --from=builder /app/vanity-server /bin/vanity-server

EXPOSE 8080

ENTRYPOINT ["/bin/vanity-server"]