package server

import (
	"context"

	api "github.com/durmusrasit/pano-api/rpc/pano-api"
	"github.com/durmusrasit/pano-api/server/helper"
	"github.com/twitchtv/twirp"
	"google.golang.org/protobuf/types/known/emptypb"
)

func (s *PanoAPIServer) UpdatePost(ctx context.Context, req *api.UpdatePostRequest) (*emptypb.Empty, error) {
	if err := validateUpdatePostRequest(req); err != nil {
		return nil, err
	}

	err := s.backend.UpdatePost(ctx, req.ID, helper.ConvertToStringPtr(req.Title), helper.ConvertToStringPtr(req.Url), helper.ConvertToStringPtr(req.Content))
	if err != nil {
		return nil, twirp.InternalErrorWith(err)
	}

	return &emptypb.Empty{}, nil
}

func validateUpdatePostRequest(req *api.UpdatePostRequest) error {
	if req.ID == "" {
		return twirp.RequiredArgumentError("ID")
	}
	return nil
}
