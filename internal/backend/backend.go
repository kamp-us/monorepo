package backend

import (
	"context"

	"github.com/durmusrasit/pano-api/internal/models"
)

type Backender interface {
	GetPost(ctx context.Context, id string) (*models.Post, error)
	CreatePost(ctx context.Context, title string, url string, content string, userId string) (*models.Post, error)
	GetAllPosts(ctx context.Context) ([]*models.Post, error)
	UpdatePost(ctx context.Context, id string, title *string, url *string, content *string) error
}
