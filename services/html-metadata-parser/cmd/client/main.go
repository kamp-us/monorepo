package main

import (
	"context"
	"fmt"
	"net/http"

	api "go.kamp.us/services/html-metadata-parser/rpc/html-metadata-parser"
)

func main() {
	client := api.NewHTMLMetadataParserProtobufClient("http://localhost:8080", &http.Client{})

	resp, err := client.Parse(context.Background(), &api.ParseRequest{Url: "https://go.dev"})
	if err == nil {
		fmt.Println(resp.Title)
	}
}
