package backend

import (
	"context"
	"time"

	"github.com/kamp-us/pano-api/internal/models"
)

type Backender interface {
	// Post
	GetBatchPosts(ctx context.Context, ids []string) ([]*models.Post, error)
	GetPosts(ctx context.Context) ([]*models.Post, error)
	CreatePost(ctx context.Context, title string, url string, content string, userId string) (*models.Post, error)
	UpdatePost(ctx context.Context, id string, title *string, url *string, content *string) error
	DeletePost(ctx context.Context, id string) error

	// Comment
	GetBatchComments(ctx context.Context, ids []string) ([]*models.Comment, error)
	GetComments(ctx context.Context) ([]*models.Comment, error)
	CreateComment(ctx context.Context, content string, postId string, userId string, parentId *string, deletedAt *time.Time) (*models.Comment, error)
	UpdateComment(ctx context.Context, id string, content string) error
	DeleteComment(ctx context.Context, id string) error

	// Upvote
	GetUpvotes(ctx context.Context, entityId string, entityType string) ([]*models.Upvote, error)
	CreateUpvote(ctx context.Context, entityId string, entityType string, userId string) (*models.Upvote, error)
	DeleteUpvote(ctx context.Context, entityId string, entityType string, userId string) error
	IsUpvoted(ctx context.Context, entityId string, entityType string, userId string) (*bool, error)
}
