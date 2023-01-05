package server

import "github.com/durmusrasit/pano-api/internal/backend"

type PanoAPIServer struct{ backend backend.Backender }

func NewPanoAPIServer(backend backend.Backender) *PanoAPIServer {
	return &PanoAPIServer{backend: backend}
}
