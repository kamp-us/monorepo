package db

import (
	"fmt"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type PostgreSQLConfig struct {
	Host     string
	Port     int
	Username string
	Password string
	DbName   string
}

func NewPostgreSQLConnect(c PostgreSQLConfig) (*gorm.DB, error) {
	dsn := postgres.Open(c.ToConnectionString())

	db, err := gorm.Open(dsn, &gorm.Config{})
	if err != nil {
		return nil, err
	}
	return db, nil
}

func (c PostgreSQLConfig) ToConnectionString() string {
	return fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", c.Host, c.Port, c.Username, c.Password, c.DbName)
}
