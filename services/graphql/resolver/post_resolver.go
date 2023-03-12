package resolver

import (
	"github.com/graph-gophers/graphql-go"
	pano_api "github.com/kamp-us/pano-api/rpc/pano-api"
)

type postResolver struct {
	post *pano_api.Post
}

func (r *postResolver) ID() graphql.ID { return graphql.ID(r.post.Id) }

func (r *postResolver) Title() string { return r.post.Title }

func (r *postResolver) Url() string { return r.post.Url }

func (r *postResolver) Content() *string { return &r.post.Content }

func (r *postResolver) Slug() string { return r.post.Slug }

func (r *postResolver) UserID() string { return r.post.UserId }
