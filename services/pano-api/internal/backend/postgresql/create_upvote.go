package postgresql

import (
	"context"
	"github.com/kamp-us/pano-api/internal/models"
)

func (b *PostgreSQLBackend) CreateUpvote(ctx context.Context, entityId string, entityType string, userId string) (*models.Upvote, error) {
	upvote := models.Upvote{
		EntityID: entityId,
		EntityType: entityType,
		UserID: userId,
	}

	result := b.DB.Create(&upvote)
	if result.Error != nil {
		return nil, result.Error
	}

	return &upvote, nil
}