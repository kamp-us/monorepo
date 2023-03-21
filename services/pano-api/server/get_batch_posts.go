package server

import (
	"context"

	"github.com/twitchtv/twirp"
	api "go.kamp.us/protos/pano-api"
	"go.kamp.us/services/pano-api/server/helper"
)

func (s *PanoAPIServer) GetBatchPosts(ctx context.Context, req *api.GetBatchPostsRequest) (*api.GetBatchPostsResponse, error) {
	if err := validateGetBatchPostsRequest(req); err != nil {
		return nil, twirp.InternalErrorWith(err)
	}

	posts, err := s.backend.GetBatchPosts(ctx, req.Ids)
	if err != nil {
		return nil, twirp.InternalErrorWith(err)
	}

	var batch []*api.Post
	for _, model := range posts {
		post := helper.ConvertToPostModel(model)
		batch = append(batch, post)
	}

	return &api.GetBatchPostsResponse{Posts: batch}, nil
}

func validateGetBatchPostsRequest(req *api.GetBatchPostsRequest) error {
	if len(req.Ids) == 0 {
		return twirp.RequiredArgumentError("Ids")
	}
	return nil
}
