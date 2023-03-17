package postgresql

import (
	"context"
	"errors"

	"go.kamp.us/services/pano-api/internal/models"
	"gorm.io/gorm"
)

func (b *PostgreSQLBackend) IsUpvoted(ctx context.Context, entityId string, entityType string, userId string) (*bool, error) {
	var isUpvoted bool = false
	upvote := models.Upvote{}

	result := b.DB.Where("entity_id = ? AND entity_type = ? AND user_id = ?", entityId, entityType, userId).Take(&upvote)

	if result.Error == nil {
		isUpvoted = true
		return &isUpvoted, nil
	}

	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		return &isUpvoted, nil
	}

	return nil, result.Error
}
