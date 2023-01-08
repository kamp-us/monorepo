package backend

import (
	"fmt"
	"net/http"

	"golang.org/x/net/html"
)

func GetTitle(url string) (title *string, err error) {
	resp, err := http.Get(url)
	if err != nil {
		fmt.Println("http.Get Error:", err)
	}

	tkn := html.NewTokenizer(resp.Body)

	var isTitle bool

	for {
		tt := tkn.Next()

		switch {
		case tt == html.ErrorToken:
			return nil, err

		case tt == html.StartTagToken:
			t := tkn.Token()

			isTitle = t.Data == "title"
		case tt == html.TextToken:
			t := tkn.Token()

			if isTitle {
				return &t.Data, nil
			}
		}
	}
}
