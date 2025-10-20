package models

import (
	"time"

	"gorm.io/gorm"
)

type Post struct {
	gorm.Model
	UserID   uint
	PostText string
	PostDate time.Time
}
