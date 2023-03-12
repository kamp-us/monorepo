package server

import (
	"context"
	
	api "github.com/kamp-us/pano-api/rpc/pano-api"
	"github.com/twitchtv/twirp"
	"github.com/kamp-us/pano-api/server/helper"
)

func (s *PanoAPIServer) GetUpvotes(ctx context.Context, req *api.GetUpvotesRequest) (*api.GetUpvotesResponse, error) {
	if err := validateGetUpvotesRequest(req); err != nil {
		return nil, err
	}

	upvotes, err := s.backend.GetUpvotes(ctx, req.EntityId, req.EntityType)
	if err != nil {
		return nil, twirp.InternalErrorWith(err)
	}

	var batch []*api.Upvote
	for _, model := range upvotes {
		upvote := helper.ConvertToUpvoteModel(model)
		batch = append(batch, upvote)
	}

	return &api.GetUpvotesResponse{Upvotes: batch}, nil
}

func validateGetUpvotesRequest(req *api.GetUpvotesRequest) error {
	if req.EntityId == "" {
		return twirp.RequiredArgumentError("EntityId")
	}
	if req.EntityType == "" {
		return twirp.RequiredArgumentError("EntityType")
	}
	return nil
}