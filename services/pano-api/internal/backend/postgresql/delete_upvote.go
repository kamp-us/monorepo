package postgresql

import (
	"context"
	"go.kamp.us/services/pano-api/internal/models"
)

func (b *PostgreSQLBackend) DeleteUpvote(ctx context.Context, entityId string, entityType string, userId string) error {
	upvote := models.Upvote{}
	result := b.DB.First(&upvote, "entity_id = ? AND entity_type = ? AND user_id = ?", entityId, entityType, userId)
	if result.Error != nil {
		return result.Error
	}

	result = b.DB.Delete(&upvote)
	if result.Error != nil {
		return result.Error
	}

	return nil
}
