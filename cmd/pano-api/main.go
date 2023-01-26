package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/kamp-us/pano-api/internal/backend/postgresql"
	"github.com/kamp-us/pano-api/internal/db"
	"github.com/kamp-us/pano-api/internal/models"
	api "github.com/kamp-us/pano-api/rpc/pano-api"
	"github.com/kamp-us/pano-api/server"
)

func main() {
	dbClient, err := db.NewPostgreSQLConnect(db.PostgreSQLConfig{
		Host:     os.Getenv("POSTGRES_HOST"),
		Port:     5432,
		Username: os.Getenv("POSTGRES_USER"),
		Password: os.Getenv("POSTGRES_PASSWORD"),
		DbName:   os.Getenv("POSTGRES_DB"),
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
