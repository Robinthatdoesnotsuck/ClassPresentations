package main

import (
	httphandler "github.com/Robinthatdoesnotsuck/ClassPresentations/advanced_city_blog/http_handler"
	"github.com/Robinthatdoesnotsuck/ClassPresentations/advanced_city_blog/repository"
	"github.com/gin-gonic/gin"
)

const url string = "postgres://postgres:super_secret@localhost:5432/city_blog"

func main() {
	db := repository.New(url)
	hdlr := httphandler.New(db)
	router := gin.Default()
	router.GET("/user", hdlr.GetUsers)
	router.POST("/user", hdlr.InsertUser)
	router.POST("/get_user", hdlr.GetUserByID)
	router.Run("localhost:8081")
}
