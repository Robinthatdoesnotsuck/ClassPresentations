package httphandler

import (
	"net/http"

	"github.com/Robinthatdoesnotsuck/ClassPresentations/advanced_city_blog/repository"
	"github.com/gin-gonic/gin"
)

type User struct {
	UserName string `json:"username"`
	Password string `json:"password"`
	Email    string `json:"email"`
}
type GetUserRequest struct {
	UserID uint `json:"user_id"`
}

type handler struct {
	db_manager *repository.DBManager
}

func New(db *repository.DBManager) *handler {

	return &handler{db_manager: db}
}
func (h *handler) GetUsers(c *gin.Context) {
	all_users, err := h.db_manager.GetAllUsers()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
	}
	c.IndentedJSON(http.StatusOK, all_users)
}

func (h *handler) GetUserByID(c *gin.Context) {
	var get_user_request GetUserRequest
	if err := c.ShouldBindJSON(&get_user_request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"Error": err.Error()})
	}
	user, err := h.db_manager.GetUserByID(get_user_request.UserID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, user)
}

func (h *handler) InsertUser(c *gin.Context) {
	var new_user User
	if err := c.ShouldBindJSON(&new_user); err != nil {
		// If binding fails, it's usually a Bad Request
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	err := h.db_manager.InsertNewUser(new_user.UserName, new_user.Password, new_user.Email)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, "user inserted")
}
