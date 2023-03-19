package postgresql

import (
	"context"

	"github.com/gosimple/slug"
	"go.kamp.us/services/pano-api/internal/backend"
	"go.kamp.us/services/pano-api/internal/models"
	"gorm.io/gorm"
)

type PostgreSQLBackend struct {
	DB *gorm.DB
}

func NewPostgreSQLBackend(db *gorm.DB) backend.Backender {
	return &PostgreSQLBackend{
		DB: db,
	}
}

func (b *PostgreSQLBackend) GetBatchPosts(ctx context.Context, ids []string) ([]*models.Post, error) {
	var posts []*models.Post
	result := b.DB.Find(&posts, ids)
	if result.Error != nil {
		return nil, result.Error
	}

	return posts, nil
}

func (b *PostgreSQLBackend) GetPosts(ctx context.Context) ([]*models.Post, error) {
	var posts []*models.Post
	result := b.DB.Find(&posts)
	if result == nil {
		return nil, result.Error
	}

	return posts, nil
}

func (b *PostgreSQLBackend) CreatePost(ctx context.Context, args models.CreatePostArgs) (*models.Post, error) {
	slug := slug.MakeLang(args.Title, "tr")

	post := models.Post{
		Title:   args.Title,
		Url:     args.Url,
		Content: args.Content,
		Slug:    slug,
		UserID:  args.UserId,
	}

	result := b.DB.Create(&post)
	if result.Error != nil {
		return nil, result.Error
	}

	return &post, nil
}

func (b *PostgreSQLBackend) UpdatePost(ctx context.Context, args models.UpdatePostArgs) error {
	post := models.Post{}
	result := b.DB.First(&post, "id = ?", args.Id)
	if result.Error != nil {
		return result.Error
	}

	slug := slug.MakeLang(*args.Title, "tr")

	updates := models.Post{
		Title:   *args.Title,
		Url:     *args.Url,
		Content: *args.Content,
		Slug:    slug,
	}

	result = b.DB.Model(&post).Updates(updates)
	if result.Error != nil {
		return result.Error
	}

	return nil
}

func (b *PostgreSQLBackend) DeletePost(ctx context.Context, id string) error {
	post := models.Post{}
	result := b.DB.First(&post, "id = ?", id)
	if result.Error != nil {
		return result.Error
	}

	result = b.DB.Delete(&post)
	if result.Error != nil {
		return result.Error
	}

	return nil
}
