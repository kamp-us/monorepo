package backend

import (
	"context"
)

type Backender interface {
	ParseMe(ctx context.Context, url string) (title *string, err error)
}

type Backend struct {
}

func NewBackend() Backender {
	return &Backend{}
}

func (b *Backend) ParseMe(ctx context.Context, url string) (title *string, err error) {
	_title, err := GetTitle(url)
	if err != nil {
		return nil, err
	}

	return _title, nil
}
