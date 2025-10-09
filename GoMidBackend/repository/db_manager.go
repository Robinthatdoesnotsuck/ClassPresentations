package repository

import (
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type DBManager struct {
	orm *gorm.DB
}

func New(url string) *DBManager {
	db, err := gorm.Open(postgres.Open(url), &gorm.Config{})
	if err != nil {
		log.Fatalln(err)
	}
	return &DBManager{db}
}
