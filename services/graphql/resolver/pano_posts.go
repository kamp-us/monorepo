package resolver

import (
	"context"

	// graphql "github.com/graph-gophers/graphql-go"
	pano "go.kamp.us/protos/pano-api"
	"go.kamp.us/services/graphql/clients"
)

type PanoPostsInput struct {
	First int32
}

type PanoPostsArgs struct {
	Input *PanoPostsInput
}

type PanoPostsConnectionResolver struct {
	edges []*PanoPostsConnectionEdge
}

type PanoPostsConnectionEdge struct {
	cursor *string
	node   *PanoPostResolver
}

func NewPanoPostsResolver(ctx context.Context, clients *clients.Clients, args *PanoPostsArgs) (*PanoPostsConnectionResolver, error) {
	response, err := clients.PanoAPI.GetPosts(ctx, &pano.GetPostsRequest{
		Limit:  args.Input.First,
		Offset: 0,
	})

	if err != nil {
		return nil, err
	}

	var edges []*PanoPostsConnectionEdge
	for _, p := range response.Posts {
		id := p.GetId()
		edge := &PanoPostsConnectionEdge{
			cursor: &id,
			node: &PanoPostResolver{
				post: p,
			},
		}

		edges = append(edges, edge)
	}

	return &PanoPostsConnectionResolver{edges: edges}, nil
}

func (r *PanoPostsConnectionResolver) Edges() *[]*PanoPostsConnectionEdge {
	return &r.edges
}

func (r *PanoPostsConnectionEdge) Cursor() *string {
	return r.cursor
}

func (r *PanoPostsConnectionEdge) Node() *PanoPostResolver {
	return r.node
}
