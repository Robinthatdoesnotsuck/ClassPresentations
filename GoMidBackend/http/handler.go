package handler

import (
	"net/http"

	"github.com/Robinthatdoesnotsuck/ClassPresentations/city_blog/repository"
	"github.com/gin-gonic/gin"
)

type handler struct {
	db_manager *repository.DBManager
}

func (h *handler) getUsers(c *gin.Context) {
	all_users := *h.db_manager.orm
	c.IndentedJSON(http.StatusOK, test_users)
}

func (h *handler) insertUser(c *gin.Context) {

	c.JSON(http.StatusCreated, new_user)
}
func (h *handler) getPosts(c *gin.Context) {
	c.IndentedJSON(http.StatusOK)
}

func (h *handler) getComments(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, test_comments)
}
