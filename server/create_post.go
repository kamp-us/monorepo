package server

import (
	"context"

	api "github.com/durmusrasit/pano-api/rpc/pano-api"
	"github.com/durmusrasit/pano-api/server/helper"
	"github.com/twitchtv/twirp"
)

func (s *PanoAPIServer) CreatePost(ctx context.Context, req *api.CreatePostRequest) (*api.Post, error) {
	if err := validateCreatePostRequest(req); err != nil {
		return nil, err
	}

	post, err := s.backend.CreatePost(ctx, req.Title, req.Url, req.Content, req.UserID)
	if err != nil {
		return nil, twirp.InternalErrorWith(err)
	}

	return helper.ConvertToPostModel(post), nil
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
	if req.UserID == "" {
		return twirp.RequiredArgumentError("UserID")
	}
	return nil
}
