package models

import "gorm.io/gorm"

type Post struct {
	Title   string
	Url     string
	Content string
	Slug    string

	UserID string
}

func AutoMigrate(db *gorm.DB) error {
	db.Exec("CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";")

	if err := db.AutoMigrate(&Post{}); err != nil {
		return err
	}
	return nil
}
