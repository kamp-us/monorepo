package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	// "os"

	graphql "github.com/graph-gophers/graphql-go"
	"github.com/graph-gophers/graphql-go/relay"
	// "go.kamp.us/services/graphql/resolver"
	// "go.kamp.us/services/graphql/schema"
	// pano "go.kamp.us/protos/pano-api"
)

type query struct{}

func (_ *query) Hello() string { return "Hello, world!" }

func main() {
	// panoapiClient := pano_api.NewPanoAPIProtobufClient(os.Getenv("PANOAPI_URI"), &http.Client{})

	// clients := resolver.Clients{
	// 	PanoAPI: panoapiClient,
	// }

	// schema := graphql.MustParseSchema(schema.Schema, &resolver.Resolver{Clients: &clients}, graphql.UseStringDescriptions())

	s := `
    type Query {
      hello: String!
    }
  `
	schema := graphql.MustParseSchema(s, &query{})

	http.Handle("/graphql", &relay.Handler{Schema: schema})

	port := os.Getenv("PORT")

	fmt.Println("Listening to", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
