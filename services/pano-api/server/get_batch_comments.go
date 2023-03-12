package server

import (
	"context"

	api "github.com/kamp-us/pano-api/rpc/pano-api"
	"github.com/kamp-us/pano-api/server/helper"
	"github.com/twitchtv/twirp"
)

func (s *PanoAPIServer) GetBatchComments(ctx context.Context, req *api.GetBatchCommentsRequest) (*api.GetBatchCommentsResponse, error) {
	if err := validateGetBatchCommentsRequest(req); err != nil {
		return nil, twirp.InternalErrorWith(err)
	}

	comments, err := s.backend.GetBatchComments(ctx, req.Ids)
	if err != nil {
		return nil, twirp.InternalErrorWith(err)
	}

	var batch []*api.Comment
	for _, model := range comments {
		comment := helper.ConvertToCommentModel(model)
		batch = append(batch, comment)
	}

	return &api.GetBatchCommentsResponse{Comments: batch}, nil
}

func validateGetBatchCommentsRequest(req *api.GetBatchCommentsRequest) error {
	if len(req.Ids) == 0 {
		return twirp.RequiredArgumentError("Ids")
	}

	return nil
}
