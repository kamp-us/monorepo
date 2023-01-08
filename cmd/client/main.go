package main

import (
	"context"
	"fmt"
	"net/http"

	api "github.com/durmusrasit/kamp-us-html-metadata-parser/rpc/html-metadata-parser"
)

func main() {
	client := api.NewMetadataParserProtobufClient("http://localhost:8080", &http.Client{})

	resp, err := client.ParseMe(context.Background(), &api.ParseMeRequest{Url: "https://go.dev"})
	if err == nil {
		fmt.Println(resp.Title)
	}
}
