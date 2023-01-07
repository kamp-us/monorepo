package server

import (
	"context"

	api "github.com/durmusrasit/pano-api/rpc/pano-api"
	"github.com/durmusrasit/pano-api/server/helper"
	"github.com/twitchtv/twirp"
)

func (s *PanoAPIServer) GetAllPosts(ctx context.Context, req *api.GetPostsRequest) (*api.GetPostsResponse, error) {
	posts, err := s.backend.GetAllPosts(ctx)
	if err != nil {
		return nil, twirp.InternalErrorWith(err)
	}

	var batch []*api.Post
	for _, model := range posts {
		post := helper.ConvertToPostModel(model)
		batch = append(batch, post)
	}

	return &api.GetPostsResponse{PostData: batch}, nil
}
