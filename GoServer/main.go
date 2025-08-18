package goserver

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/hello", say_hello)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func say_hello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "The source you have requested is: %s\n", r.URL.Path)
}
