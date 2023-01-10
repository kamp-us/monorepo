package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	"github.com/kamp-us/pano-api/internal/backend/postgresql"
	"github.com/kamp-us/pano-api/internal/db"
	"github.com/kamp-us/pano-api/internal/models"
	api "github.com/kamp-us/pano-api/rpc/pano-api"
	"github.com/kamp-us/pano-api/server"
)

func main() {
	envError := godotenv.Load()
	if envError != nil {
		log.Fatalf("An error occurred while loading env file. Error: %s", envError)
	}

	pgConfigData := db.PostgreSQLConfig{Host: os.Getenv("POSTGRES_HOST"), Port: 5432, Username: os.Getenv("POSTGRES_USERNAME"), Password: os.Getenv("POSTGRES_PASSWORD"), DbName: os.Getenv("POSTGRES_DBNAME")}

	dbClient, dbError := db.NewPostgreSQLConnect(pgConfigData)
	if dbError != nil {
		log.Fatalf("An error occurred while establishing db connection. Error: %s", dbError)
	}

	if err := models.AutoMigrate(dbClient); err != nil {
		log.Fatalf("An error occurred while auto migrate. Error: %s", err)
	}

	s := server.NewPanoAPIServer(postgresql.NewPostgreSQLBackend(dbClient))
	twirpHander := api.NewPanoAPIServer(s)

	mux := http.NewServeMux()
	mux.Handle(twirpHander.PathPrefix(), twirpHander)

	fmt.Println("Listening to :8080")
	http.ListenAndServe(":8080", mux)
}
