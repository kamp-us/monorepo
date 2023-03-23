package server

import (
	"context"
	"github.com/twitchtv/twirp"
	api "go.kamp.us/protos/pano-api"
	"go.kamp.us/services/pano-api/server/helper"
)

func (s *PanoAPIServer) CreateUpvote(ctx context.Context, req *api.CreateUpvoteRequest) (*api.CreateUpvoteResponse, error) {
	if err := validateCreateUpvoteRequest(req); err != nil {
		return nil, err
	}

	upvote, err := s.backend.CreateUpvote(ctx, req.EntityId, req.EntityType, req.UserId)
	if err != nil {
		return nil, twirp.InternalErrorWith(err)
	}

	return &api.CreateUpvoteResponse{Upvote: helper.ConvertToUpvoteModel(upvote)}, nil
}

func validateCreateUpvoteRequest(req *api.CreateUpvoteRequest) error {
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
