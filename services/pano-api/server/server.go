package server

import "go.kamp.us/services/pano-api/internal/backend"

type PanoAPIServer struct {
	backend backend.Backender
}

func NewPanoAPIServer(backend backend.Backender) *PanoAPIServer {
	return &PanoAPIServer{backend: backend}
}
