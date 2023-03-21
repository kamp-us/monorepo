package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	api "go.kamp.us/protos/pano-api"
	"go.kamp.us/services/pano-api/internal/backend/postgresql"
	"go.kamp.us/services/pano-api/internal/db"
	"go.kamp.us/services/pano-api/internal/models"
	"go.kamp.us/services/pano-api/server"
)

func main() {
	dbClient, err := db.NewPostgreSQLConnect(db.PostgreSQLConfig{
		DatabaseURL: os.Getenv("DATABASE_URL"),
	})

	if err != nil {
		log.Fatalf("An error occurred while establishing db connection. Error: %s", err)
	}

	if err := models.AutoMigrate(dbClient); err != nil {
		log.Fatalf("An error occurred while auto migrate. Error: %s", err)
	}

	postgreSQLBackend := postgresql.NewPostgreSQLBackend(dbClient)

	s := server.NewPanoAPIServer(postgreSQLBackend)
	twirpHandler := api.NewPanoAPIServer(s)

	mux := http.NewServeMux()
	mux.Handle(twirpHandler.PathPrefix(), twirpHandler)
	mux.Handle("/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("OK"))
		w.WriteHeader(http.StatusOK)
	}))

	port := fmt.Sprintf(":%s", os.Getenv("PORT"))
	fmt.Printf("Listening to %s\n", port)
	http.ListenAndServe(port, mux)
}
