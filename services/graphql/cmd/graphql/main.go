package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	graphql "github.com/graph-gophers/graphql-go"
	"github.com/graph-gophers/graphql-go/relay"
	"go.kamp.us/services/graphql/clients"
	"go.kamp.us/services/graphql/resolver"
	"go.kamp.us/services/graphql/schema"
)

func main() {
	// create the api clients
	c := clients.NewClients(clients.ClientsArgs{
		PanoAPI: &clients.ClientConfig{
			URL: os.Getenv("PANO_API_URL"),
		},
	})

	// create the root resolver
	r := resolver.NewResolver(c)

	schema := graphql.MustParseSchema(schema.Schema, r, graphql.UseStringDescriptions())

	http.Handle("/graphql", &relay.Handler{Schema: schema})

	port := os.Getenv("PORT")

	fmt.Println("Listening to", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
