package main

import (
	"fmt"

	"github.com/Robinthatdoesnotsuck/ClassPresentations/advanced_city_blog/repository"
)

func main() {
	db := *repository.New("postgres://postgres:super_secret@localhost:5432/city_blog")
	db.MigrateDBUsers()
	db.MigrateDBPosts()
	fmt.Println("? Migration is complete")
}
