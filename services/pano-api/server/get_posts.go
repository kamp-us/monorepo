package server

import (
	"context"
	"go.kamp.us/services/pano-api/internal/models"

	"github.com/twitchtv/twirp"
	api "go.kamp.us/protos/pano-api"
	"go.kamp.us/services/pano-api/server/helper"
)

func (s *PanoAPIServer) GetPosts(ctx context.Context, req *api.GetPostsRequest) (*api.GetPostsResponse, error) {
	posts, err := s.backend.GetPosts(ctx, models.GetPostsArgs{
		Limit:  req.Limit,
		Offset: req.Offset,
	})

	if err != nil {
		return nil, twirp.InternalErrorWith(err)
	}

	var batch []*api.Post
	for _, model := range posts {
		post := helper.ConvertToPostModel(model)
		batch = append(batch, post)
	}

	return &api.GetPostsResponse{Posts: batch}, nil
}
