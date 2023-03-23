package server

import (
	"context"

	"github.com/twitchtv/twirp"
	api "go.kamp.us/protos/pano-api"
	"go.kamp.us/services/pano-api/server/helper"
)

func (s *PanoAPIServer) CreateComment(ctx context.Context, req *api.CreateCommentRequest) (*api.CreateCommentResponse, error) {
	if err := validateCreateCommentRequest(req); err != nil {
		return nil, err
	}

	comment, err := s.backend.CreateComment(ctx, req.Content, req.PostId, req.UserId, helper.ConvertToStringPtr(req.ParentId), helper.ConvertToTime(req.DeletedAt))
	if err != nil {
		return nil, twirp.InternalErrorWith(err)
	}

	return &api.CreateCommentResponse{
		Comment: helper.ConvertToCommentModel(comment),
	}, nil
}

func validateCreateCommentRequest(req *api.CreateCommentRequest) error {
	if req.Content == "" {
		return twirp.RequiredArgumentError("Content")
	}

	if req.PostId == "" {
		return twirp.RequiredArgumentError("PostId")
	}

	if req.UserId == "" {
		return twirp.RequiredArgumentError("UserId")
	}

	return nil
}
