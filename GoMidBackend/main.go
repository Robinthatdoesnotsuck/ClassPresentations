package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type User struct {
	ID       string `json:"id"`
	UserName string `json:"username"`
	Password string `json:"password"`
	Email    string `json:"email"`
}

var test_users = []User{
	{ID: "1", UserName: "me", Password: "secure", Email: "something@something"},
	{ID: "2", UserName: "not me", Password: "secure", Email: "something@something"},
	{ID: "3", UserName: "also me", Password: "secure", Email: "something@something"},
}

type Post struct {
	ID       string `json:"id"`
	UserID   string `json:"user_id"`
	PostText string `json:"post_text"`
	PostDate string `json:"post_date"`
}

var test_posts = []Post{
	{ID: "1", UserID: "1", PostText: "about stuff", PostDate: "12/12/2025"},
	{ID: "2", UserID: "2", PostText: "not about stuff", PostDate: "11/11/2025"},
	{ID: "3", UserID: "3", PostText: "again about stuff", PostDate: "10/10/2025"},
}

type Comment struct {
	ID          string `json:"id"`
	UserID      string `json:"user_id"`
	PostID      string `json:"post_id"`
	CommentText string `json:"comment_text"`
	Reply       bool   `json:"reply"`
	Parent      string `json:"parent"`
}

var test_comments = []Comment{
	{ID: "1", UserID: "1", PostID: "1", CommentText: "This is shit", Reply: false},
	{ID: "2", UserID: "2", PostID: "1", CommentText: "This is shit", Reply: true, Parent: "1"},
	{ID: "3", UserID: "3", PostID: "3", CommentText: "This is shit", Reply: false},
}

func getUsers(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, test_users)
}

func getPosts(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, test_posts)
}

func getComments(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, test_comments)
}

func main() {
	router := gin.Default()
	router.GET("/users", getUsers)
	router.GET("/posts", getPosts)
	router.GET("/comments", getComments)
	router.Run("localhost:8081")
}
