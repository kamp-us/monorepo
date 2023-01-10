package server

import (
	"context"

	api "github.com/kamp-us/pano-api/rpc/pano-api"
	"github.com/kamp-us/pano-api/server/helper"
	"github.com/twitchtv/twirp"
)

func (s *PanoAPIServer) UpdatePost(ctx context.Context, req *api.UpdatePostRequest) (*api.UpdatePostResponse, error) {
	if err := validateUpdatePostRequest(req); err != nil {
		return nil, err
	}

	err := s.backend.UpdatePost(ctx, req.Id, helper.ConvertToStringPtr(req.Title), helper.ConvertToStringPtr(req.Url), helper.ConvertToStringPtr(req.Content))
	if err != nil {
		return nil, twirp.InternalErrorWith(err)
	}

	return &api.UpdatePostResponse{}, nil
}

func validateUpdatePostRequest(req *api.UpdatePostRequest) error {
	if req.Id == "" {
		return twirp.RequiredArgumentError("Id")
	}
	return nil
}
