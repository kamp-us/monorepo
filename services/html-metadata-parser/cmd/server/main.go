package main

import (
	"fmt"
	"net/http"

	"go.kamp.us/services/html-metadata-parser/internal/backend"
	"go.kamp.us/services/html-metadata-parser/internal/server"
	api "go.kamp.us/services/html-metadata-parser/rpc/html-metadata-parser"
)

func main() {

	s := server.NewMetadataParserServer(backend.NewBackend())
	twirpHandler := api.NewHTMLMetadataParserServer(s)

	mux := http.NewServeMux()
	mux.Handle(twirpHandler.PathPrefix(), twirpHandler)

	fmt.Println("Listening to :8080")
	http.ListenAndServe(":8080", mux)
}
