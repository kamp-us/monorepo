package db

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type PostgreSQLConfig struct {
	DatabaseURL string
}

func NewPostgreSQLConnect(c PostgreSQLConfig) (*gorm.DB, error) {
	dsn := postgres.Open(c.DatabaseURL)

	db, err := gorm.Open(dsn, &gorm.Config{})
	if err != nil {
		return nil, err
	}
	return db, nil
}
