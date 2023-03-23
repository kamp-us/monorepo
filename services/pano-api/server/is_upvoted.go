package server

import (
	"context"
	"github.com/twitchtv/twirp"
	api "go.kamp.us/protos/pano-api"
)

func (s *PanoAPIServer) IsUpvoted(ctx context.Context, req *api.IsUpvotedRequest) (*api.IsUpvotedResponse, error) {
	if err := validateIsVotedRequest(req); err != nil {
		return nil, err
	}

	isUpvoted, err := s.backend.IsUpvoted(ctx, req.EntityId, req.EntityType, req.UserId)
	if err != nil {
		return nil, twirp.InternalErrorWith(err)
	}

	return &api.IsUpvotedResponse{IsUpvoted: *isUpvoted}, nil
}

func validateIsVotedRequest(req *api.IsUpvotedRequest) error {
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
