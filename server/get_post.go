package server

import (
	"context"

	api "github.com/durmusrasit/pano-api/rpc/pano-api"
	"github.com/durmusrasit/pano-api/server/helper"
	"github.com/twitchtv/twirp"
)

func (s *PanoAPIServer) GetPost(ctx context.Context, req *api.GetPostRequest) (*api.Post, error) {
	if err := validateGetPostRequest(req); err != nil {
		return nil, err
	}

	post, err := s.backend.GetPost(ctx, req.ID)
	if err != nil {
		return nil, twirp.InternalErrorWith(err)
	}

	return helper.ConvertToPostModel(post), nil
}

func validateGetPostRequest(req *api.GetPostRequest) error {
	if req.ID == "" {
		return twirp.RequiredArgumentError("ID")
	}
	return nil
}
