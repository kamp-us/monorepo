package server

import (
	"context"

	"github.com/twitchtv/twirp"
	api "go.kamp.us/protos/pano-api"
	"go.kamp.us/services/pano-api/server/helper"
)

func (s *PanoAPIServer) GetComments(ctx context.Context, req *api.GetCommentsRequest) (*api.GetCommentsResponse, error) {
	comments, err := s.backend.GetComments(ctx)
	if err != nil {
		return nil, twirp.InternalErrorWith(err)
	}

	var batch []*api.Comment
	for _, model := range comments {
		comment := helper.ConvertToCommentModel(model)
		batch = append(batch, comment)
	}

	return &api.GetCommentsResponse{Comments: batch}, nil
}
