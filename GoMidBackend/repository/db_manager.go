package repository

import (
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	UserName string
	Password string
	Email    string
}

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
	user := User{UserName: name, Password: password, Email: email}
	result := db.orm.Create(&user)
	if result.Error != nil {
		return result.Error
	}
	return nil
}
func (db *DBManager) GetUserByID(id uint) (User, error) {
	var user User
	result := db.orm.First(&user, id)
	if result.Error != nil {
		return User{}, result.Error
	}
	return user, nil
}

func (db *DBManager) GetAllUsers() ([]User, error) {
	var users []User
	result := db.orm.Find(&users)
	if result.Error != nil {
		return users, result.Error
	}
	return users, nil
}
