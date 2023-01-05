package models

type Post struct {
	Title   string
	Url     string
	Content string
	Slug    string

	UserID string
}
