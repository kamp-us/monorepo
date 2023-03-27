package resolver

import (
	"context"

	"go.kamp.us/services/graphql/clients"
)

type Resolver struct {
	Clients *clients.Clients
}

func NewResolver(clients *clients.Clients) *Resolver {
	return &Resolver{
		Clients: clients,
	}
}

func (r *Resolver) Pano(ctx context.Context) *PanoResolver {
	return NewPanoResolver(r.Clients)
}
