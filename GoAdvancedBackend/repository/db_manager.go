package repository

import (
	"log"
	"time"

	"github.com/Robinthatdoesnotsuck/ClassPresentations/advanced_city_blog/models"
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

func (db *DBManager) InsertNewUser(name string, password string, email string) error {
	user := models.User{Username: name, Password: password, Email: email, LastLogin: time.Now().String()}
	result := db.orm.Create(&user)
	if result.Error != nil {
		return result.Error
	}
	return nil
}
func (db *DBManager) GetUserByID(id uint) (models.User, error) {
	var user models.User
	result := db.orm.First(&user, id)
	if result.Error != nil {
		return models.User{}, result.Error
	}
	return user, nil
}

func (db *DBManager) GetAllUsers() ([]models.User, error) {
	var users []models.User
	result := db.orm.Find(&users)
	if result.Error != nil {
		return users, result.Error
	}
	return users, nil
}

func (db *DBManager) MigrateDBUsers() error {
	err := db.orm.AutoMigrate(&models.User{})
	if err != nil {
		log.Fatalln(err)
	}
	return nil
}

func (db *DBManager) MigrateDBPosts() error {
	err := db.orm.AutoMigrate(&models.Post{})
	if err != nil {
		log.Fatalln(err)
	}
	return nil
}
