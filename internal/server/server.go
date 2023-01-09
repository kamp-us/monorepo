package server

import (
	"context"

	"github.com/durmusrasit/kamp-us-html-metadata-parser/internal/backend"
	"github.com/durmusrasit/kamp-us-html-metadata-parser/internal/server/helper"
	api "github.com/durmusrasit/kamp-us-html-metadata-parser/rpc/html-metadata-parser"
	"github.com/twitchtv/twirp"
)

type MetadataParserServer struct{ backend backend.Backender }

func NewMetadataParserServer(backend backend.Backender) *MetadataParserServer {
	return &MetadataParserServer{backend: backend}
}

func (s *MetadataParserServer) Parse(ctx context.Context, req *api.ParseRequest) (*api.ParseResponse, error) {
	if req.Url == "" {
		return nil, twirp.RequiredArgumentError("Title")
	}

	title, err := s.backend.Parse(ctx, req.Url)
	if err != nil {
		return nil, err
	}

	return &api.ParseResponse{Title: helper.TrimSpace(*title)}, nil
}
