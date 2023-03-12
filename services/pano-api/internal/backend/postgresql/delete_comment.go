package postgresql

import (
	"context"

	"github.com/kamp-us/pano-api/internal/models"
)

func (b *PostgreSQLBackend) DeleteComment(ctx context.Context, id string) error {
	comment := models.Comment{}

	result := b.DB.First(&comment, "id = ?", id)
	if result.Error != nil {
		return result.Error
	}

	result = b.DB.Delete(&comment)
	if result.Error != nil {
		return result.Error
	}

	return nil
}
