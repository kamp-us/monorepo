package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/graph-gophers/graphql-go"
	"github.com/graph-gophers/graphql-go/relay"
	"github.com/kamp-us/graphql/resolver"
	"github.com/kamp-us/graphql/schema"

	pano_api "github.com/kamp-us/pano-api/rpc/pano-api"
)

func main() {
	panoapiClient := pano_api.NewPanoAPIProtobufClient(os.Getenv("PANOAPI_URI"), &http.Client{})

	clients := resolver.Clients{
		PanoAPI: panoapiClient,
	}

	schema := graphql.MustParseSchema(schema.Schema, &resolver.Resolver{Clients: &clients}, graphql.UseStringDescriptions())
	http.Handle("/graphql", &relay.Handler{Schema: schema})

	fmt.Println("Listening to :8000")
	log.Fatal(http.ListenAndServe(":8000", nil))
}
