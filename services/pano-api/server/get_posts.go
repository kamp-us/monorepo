package server

import (
	"context"

	api "github.com/kamp-us/pano-api/rpc/pano-api"
	"github.com/kamp-us/pano-api/server/helper"
	"github.com/twitchtv/twirp"
)

func (s *PanoAPIServer) GetPosts(ctx context.Context, req *api.GetPostsRequest) (*api.GetPostsResponse, error) {
	posts, err := s.backend.GetPosts(ctx)
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
