package server

import (
	"context"

	"github.com/twitchtv/twirp"
	api "go.kamp.us/services/pano-api/rpc/pano-api"
)

func (s *PanoAPIServer) UpdateComment(ctx context.Context, req *api.UpdateCommentRequest) (*api.UpdateCommentResponse, error) {
	if err := validateUpdateCommentRequest(req); err != nil {
		return nil, err
	}

	err := s.backend.UpdateComment(ctx, req.Id, req.Content)
	if err != nil {
		return nil, twirp.InternalErrorWith(err)
	}

	return &api.UpdateCommentResponse{
		Comment: &api.Comment{},
	}, nil
}

func validateUpdateCommentRequest(req *api.UpdateCommentRequest) error {
	if req.Id == "" {
		return twirp.RequiredArgumentError("Id")
	}

	if req.Content == "" {
		return twirp.RequiredArgumentError("Content")
	}

	return nil
}
