package postgresql

import (
	"context"
	"go.kamp.us/services/pano-api/internal/models"
)

func (b *PostgreSQLBackend) GetUpvotes(ctx context.Context, entityId string, entityType string) ([]*models.Upvote, error) {
	var upvotes []*models.Upvote
	result := b.DB.Where("entity_id = ? AND entity_type = ?", entityId, entityType).Find(&upvotes)
	if result == nil {
		return nil, result.Error
	}

	return upvotes, nil
}
