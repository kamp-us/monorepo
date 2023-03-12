package models

type CreatePostArgs struct {
	Title   string
	Url     string
	Content string
	UserId  string
}

type UpdatePostArgs struct {
	Id      string
	Title   *string
	Url     *string
	Content *string
}
