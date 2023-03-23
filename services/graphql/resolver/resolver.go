package resolver

import pano "go.kamp.us/protos/pano-api"

type Clients struct {
	PanoAPI pano_api.PanoAPI
}

type Resolver struct {
	Clients *Clients
}
