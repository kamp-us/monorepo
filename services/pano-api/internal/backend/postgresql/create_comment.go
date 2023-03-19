package postgresql

import (
	"context"
	"time"

	"go.kamp.us/services/pano-api/internal/models"
)

func (b *PostgreSQLBackend) CreateComment(ctx context.Context, content string, postId string, userId string, parentId *string, deletedAt *time.Time) (*models.Comment, error) {
	comment := models.Comment{
		Content: content,
		PostID:  postId,
		UserID:  userId,
	}

	// TODO: is this the way?
	if parentId != nil {
		comment.ParentID = *parentId
	}

	if deletedAt != nil {
		comment.DeletedAt = *deletedAt
	}

	result := b.DB.Create(&comment)
	if result.Error != nil {
		return nil, result.Error
	}

	return &comment, nil
}
