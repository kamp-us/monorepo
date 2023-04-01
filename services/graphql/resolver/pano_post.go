package resolver

import (
	"context"

	graphql "github.com/graph-gophers/graphql-go"
	pano "go.kamp.us/protos/pano-api"
	"go.kamp.us/services/graphql/clients"
)

type PanoPostResolver struct {
	post *pano.Post
}

type PanoPostInput struct {
	Slug string
	Id   string
}

type PanoPostArgs struct {
	Input *PanoPostInput
}

func NewPanoPostResolver(ctx context.Context, clients *clients.Clients, args *PanoPostArgs) (*PanoPostResolver, error) {
	response, err := clients.PanoAPI.GetBatchPosts(ctx, &pano.GetBatchPostsRequest{Ids: []string{args.Input.Id}})

	if err != nil {
		return nil, err
	}

	return &PanoPostResolver{response.Posts[0]}, nil
}

func (r *PanoPostResolver) ID() graphql.ID { return graphql.ID(r.post.Id) }

func (r *PanoPostResolver) Title() string { return r.post.Title }

func (r *PanoPostResolver) Url() string { return r.post.Url }

func (r *PanoPostResolver) Content() *string { return &r.post.Content }

func (r *PanoPostResolver) Slug() string { return r.post.Slug }

func (r *PanoPostResolver) UserID() string { return r.post.UserId }
