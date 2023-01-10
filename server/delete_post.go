package server

import (
	"context"

	api "github.com/durmusrasit/pano-api/rpc/pano-api"
	"github.com/twitchtv/twirp"
)

func (s *PanoAPIServer) DeletePost(ctx context.Context, req *api.DeletePostRequest) (*api.DeletePostResponse, error) {
	if err := validateDeletePostRequest(req); err != nil {
		return nil, err
	}

	err := s.backend.DeletePost(ctx, req.Id)
	if err != nil {
		return nil, twirp.InternalErrorWith(err)
	}

	return &api.DeletePostResponse{}, nil
}

func validateDeletePostRequest(req *api.DeletePostRequest) error {
	if req.Id == "" {
		return twirp.RequiredArgumentError("Id")
	}
	return nil
}
