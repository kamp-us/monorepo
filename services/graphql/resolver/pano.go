package resolver

import (
	"context"

	"go.kamp.us/services/graphql/clients"
)

type PanoResolver struct {
	Clients *clients.Clients
}

func NewPanoResolver(clients *clients.Clients) *PanoResolver {
	return &PanoResolver{
		Clients: clients,
	}
}

func (q *PanoResolver) Post(ctx context.Context, args *PanoPostArgs) (*PanoPostResolver, error) {
	return NewPanoPostResolver(ctx, q.Clients, args)
}

func (q *PanoResolver) Posts(ctx context.Context, args *PanoPostsArgs) (*PanoPostsConnectionResolver, error) {
	return NewPanoPostsResolver(ctx, q.Clients, args)
}
