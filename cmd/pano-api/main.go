package main

import (
	"log"
	"net/http"
	"os"

	"github.com/durmusrasit/pano-api/internal/backend/postgresql"
	"github.com/durmusrasit/pano-api/internal/db"
	"github.com/durmusrasit/pano-api/internal/models"
	api "github.com/durmusrasit/pano-api/rpc/pano-api"
	"github.com/durmusrasit/pano-api/server"
	"github.com/joho/godotenv"
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

	http.ListenAndServe(":8080", mux)
}
