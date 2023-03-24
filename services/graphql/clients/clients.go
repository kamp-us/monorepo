package clients

import (
	"net/http"

	pano "go.kamp.us/protos/pano-api"
)

type Clients struct {
	PanoAPI pano.PanoAPI
}

type ClientConfig struct {
	URL string
}

type ClientsArgs struct {
	PanoAPI *ClientConfig
}

func NewClients(args ClientsArgs) *Clients {
	return &Clients{
		PanoAPI: pano.NewPanoAPIProtobufClient(args.PanoAPI.URL, &http.Client{}),
	}
}
