package helper

import (
	"github.com/kamp-us/pano-api/internal/models"
	api "github.com/kamp-us/pano-api/rpc/pano-api"
	"google.golang.org/protobuf/types/known/wrapperspb"
)

func ConvertToPostModel(p *models.Post) *api.Post {
	return &api.Post{Id: p.ID.String(), Title: p.Title, Url: p.Url, Content: p.Content, Slug: p.Slug, UserId: p.UserID}
}

func ConvertToStringPtr(value *wrapperspb.StringValue) *string {
	val := value.GetValue()
	return &val
}
