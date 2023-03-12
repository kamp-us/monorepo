package backend

import (
	"context"
)

type Backender interface {
	Parse(ctx context.Context, url string) (title *string, err error)
}

type Backend struct {
}

func NewBackend() Backender {
	return &Backend{}
}

func (b *Backend) Parse(ctx context.Context, url string) (*string, error) {
	title, err := parseTitle(url)
	if err != nil {
		return nil, err
	}

	return title, nil
}
