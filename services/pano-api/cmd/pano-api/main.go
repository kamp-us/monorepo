package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"go.kamp.us/services/pano-api/internal/backend/postgresql"
	"go.kamp.us/services/pano-api/internal/db"
	"go.kamp.us/services/pano-api/internal/models"
	api "go.kamp.us/services/pano-api/rpc/pano-api"
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
	twirpHander := api.NewPanoAPIServer(s)

	mux := http.NewServeMux()
	mux.Handle(twirpHander.PathPrefix(), twirpHander)
	mux.Handle("/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("OK"))
		w.WriteHeader(http.StatusOK)
	}))

	fmt.Println("Listening to :8080")
	http.ListenAndServe(":8080", mux)
}
