package backend

import (
	"context"

	"github.com/durmusrasit/pano-api/internal/models"
)

type Backender interface {
	GetPost(ctx context.Context, id string) (*models.Post, error)
	CreatePost(ctx context.Context, name string, url string, content string, userId string) (*models.Post, error)
}
