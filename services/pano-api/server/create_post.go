package server

import (
	"context"

	"github.com/twitchtv/twirp"
	"go.kamp.us/services/pano-api/internal/models"
	api "go.kamp.us/services/pano-api/rpc/pano-api"
	"go.kamp.us/services/pano-api/server/helper"
)

func (s *PanoAPIServer) CreatePost(ctx context.Context, req *api.CreatePostRequest) (*api.CreatePostResponse, error) {
	if err := validateCreatePostRequest(req); err != nil {
		return nil, err
	}

	args := models.CreatePostArgs{
		Title:   req.Title,
		Url:     req.Url,
		Content: req.Content,
		UserId:  req.UserId,
	}

	post, err := s.backend.CreatePost(ctx, args)
	if err != nil {
		return nil, twirp.InternalErrorWith(err)
	}

	return &api.CreatePostResponse{Post: helper.ConvertToPostModel(post)}, nil
}

func validateCreatePostRequest(req *api.CreatePostRequest) error {
	if req.Title == "" {
		return twirp.RequiredArgumentError("Title")
	}
	if req.Url == "" {
		return twirp.RequiredArgumentError("Url")
	}
	if req.Content == "" {
		return twirp.RequiredArgumentError("Content")
	}
	if req.UserId == "" {
		return twirp.RequiredArgumentError("UserId")
	}
	return nil
}
