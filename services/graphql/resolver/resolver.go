package resolver

import "go.kamp.us/services/graphql/clients"

type Resolver struct {
	Clients *clients.Clients
}

func NewResolver(clients *clients.Clients) *Resolver {
	return &Resolver{
		Clients: clients,
	}
}
