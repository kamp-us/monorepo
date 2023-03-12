package server

import (
	"context"

	api "github.com/kamp-us/pano-api/rpc/pano-api"
	"github.com/kamp-us/pano-api/server/helper"
	"github.com/twitchtv/twirp"
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
