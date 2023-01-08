package server

import (
	"context"

	api "github.com/durmusrasit/pano-api/rpc/pano-api"
	"github.com/twitchtv/twirp"
	"google.golang.org/protobuf/types/known/emptypb"
)

func (s *PanoAPIServer) DeletePost(ctx context.Context, req *api.DeletePostRequest) (*emptypb.Empty, error) {
	if err := validateDeletePostRequest(req); err != nil {
		return nil, err
	}

	err := s.backend.DeletePost(ctx, req.ID)
	if err != nil {
		return nil, twirp.InternalErrorWith(err)
	}

	return &emptypb.Empty{}, nil
}

func validateDeletePostRequest(req *api.DeletePostRequest) error {
	if req.ID == "" {
		return twirp.RequiredArgumentError("ID")
	}
	return nil
}
