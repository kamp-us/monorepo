package server

import (
	"context"

	"github.com/twitchtv/twirp"
	"go.kamp.us/services/pano-api/internal/models"
	api "go.kamp.us/protos/pano-api"
	"go.kamp.us/services/pano-api/server/helper"
)

func (s *PanoAPIServer) UpdatePost(ctx context.Context, req *api.UpdatePostRequest) (*api.UpdatePostResponse, error) {
	if err := validateUpdatePostRequest(req); err != nil {
		return nil, err
	}

	args := models.UpdatePostArgs{
		Id:      req.Id,
		Title:   helper.ConvertToStringPtr(req.Title),
		Url:     helper.ConvertToStringPtr(req.Url),
		Content: helper.ConvertToStringPtr(req.Content),
	}

	err := s.backend.UpdatePost(ctx, args)
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
