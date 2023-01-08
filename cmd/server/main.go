package main

import (
	"fmt"
	"net/http"

	"github.com/durmusrasit/kamp-us-html-metadata-parser/internal/backend"
	"github.com/durmusrasit/kamp-us-html-metadata-parser/internal/server"
	api "github.com/durmusrasit/kamp-us-html-metadata-parser/rpc/html-metadata-parser"
)

func main() {

	s := server.NewMetadataParserServer(backend.NewBackend())
	twirpHandler := api.NewMetadataParserServer(s)

	mux := http.NewServeMux()
	mux.Handle(twirpHandler.PathPrefix(), twirpHandler)

	fmt.Println("Listening to :8080")
	http.ListenAndServe(":8080", mux)
}
