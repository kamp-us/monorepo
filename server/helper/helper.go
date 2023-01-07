package helper

import (
	"github.com/durmusrasit/pano-api/internal/models"
	api "github.com/durmusrasit/pano-api/rpc/pano-api"
)

func ConvertToPostModel(p *models.Post) *api.Post {
	return &api.Post{Title: p.Title, Url: p.Url, Content: p.Content, Slug: p.Slug, UserID: p.UserID}
}
