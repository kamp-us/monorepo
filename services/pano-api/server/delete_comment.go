package server

import (
	"context"

	"github.com/twitchtv/twirp"
	api "go.kamp.us/services/pano-api/rpc/pano-api"
)

func (s *PanoAPIServer) DeleteComment(ctx context.Context, req *api.DeleteCommentRequest) (*api.DeleteCommentResponse, error) {
	if err := validateDeleteCommentRequest(req); err != nil {
		return nil, err
	}

	err := s.backend.DeleteComment(ctx, req.Id)
	if err != nil {
		return nil, twirp.InternalErrorWith(err)
	}

	return &api.DeleteCommentResponse{
		Comment: &api.Comment{},
	}, nil
}

func validateDeleteCommentRequest(req *api.DeleteCommentRequest) error {
	if req.Id == "" {
		return twirp.RequiredArgumentError("Id")
	}

	return nil
}
