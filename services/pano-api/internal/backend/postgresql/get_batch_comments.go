package postgresql

import (
	"context"

	"github.com/kamp-us/pano-api/internal/models"
)

// TODO: why do we return array of pointers?
func (b *PostgreSQLBackend) GetBatchComments(ctx context.Context, ids []string) ([]*models.Comment, error) {
	var comments []*models.Comment
	result := b.DB.Find(comments, ids)

	if result.Error != nil {
		return nil, result.Error
	}

	return comments, nil
}
