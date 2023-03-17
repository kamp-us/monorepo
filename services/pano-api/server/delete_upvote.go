package server

import (
	"context"
	"github.com/twitchtv/twirp"
	api "go.kamp.us/services/pano-api/rpc/pano-api"
)

func (s *PanoAPIServer) DeleteUpvote(ctx context.Context, req *api.DeleteUpvoteRequest) (*api.DeleteUpvoteResponse, error) {
	if err := validateDeleteUpvoteRequest(req); err != nil {
		return nil, err
	}

	err := s.backend.DeleteUpvote(ctx, req.EntityId, req.EntityType, req.UserId)
	if err != nil {
		return nil, twirp.InternalErrorWith(err)
	}

	return &api.DeleteUpvoteResponse{}, nil
}

func validateDeleteUpvoteRequest(req *api.DeleteUpvoteRequest) error {
	if req.EntityId == "" {
		return twirp.RequiredArgumentError("EntityId")
	}
	if req.EntityType == "" {
		return twirp.RequiredArgumentError("EntityType")
	}
	if req.UserId == "" {
		return twirp.RequiredArgumentError("UserId")
	}
	return nil
}
