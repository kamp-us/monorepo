package helper

import (
	"time"

	"github.com/golang/protobuf/ptypes/timestamp"
	"go.kamp.us/services/pano-api/internal/models"
	api "go.kamp.us/protos/pano-api"
	"google.golang.org/protobuf/types/known/wrapperspb"
)

func ConvertToPostModel(p *models.Post) *api.Post {
	return &api.Post{Id: p.ID.String(), Title: p.Title, Url: p.Url, Content: p.Content, Slug: p.Slug, UserId: p.UserID}
}

func ConvertToCommentModel(c *models.Comment) *api.Comment {
	return &api.Comment{Id: c.ID.String(), Content: c.Content, PostId: c.PostID, UserId: c.UserID, ParentId: c.ParentID}
}

func ConvertToUpvoteModel(u *models.Upvote) *api.Upvote {
	return &api.Upvote{Id: u.ID.String(), EntityId: u.EntityID, EntityType: u.EntityType, UserId: u.UserID}
}

func ConvertToStringPtr(value *wrapperspb.StringValue) *string {
	val := value.GetValue()
	return &val
}

func ConvertToTime(value *timestamp.Timestamp) *time.Time {
	val := value.AsTime()
	return &val
}
