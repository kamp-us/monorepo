package postgresql

import (
	"context"

	"go.kamp.us/services/pano-api/internal/models"
)

func (b *PostgreSQLBackend) GetComments(ctx context.Context) ([]*models.Comment, error) {
	var comments []*models.Comment
	result := b.DB.Find(comments)

	if result.Error != nil {
		return nil, result.Error
	}

	return comments, nil
}
