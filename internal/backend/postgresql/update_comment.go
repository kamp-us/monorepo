package postgresql

import (
	"context"

	"github.com/kamp-us/pano-api/internal/models"
)

func (b *PostgreSQLBackend) UpdateComment(ctx context.Context, id string, content string) error {
	comment := models.Comment{}

	result := b.DB.First(&comment, "id = ?", id)
	if result.Error != nil {
		return result.Error
	}

	updates := models.Comment{
		Content: content,
	}

	result = b.DB.Model(&comment).Updates(updates)
	if result.Error != nil {
		return result.Error
	}

	return nil
}
