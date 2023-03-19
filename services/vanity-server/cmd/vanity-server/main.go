package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"text/template"
)

var (
	port = flag.Int("port", 8080, "server port")
	pkg  = flag.String("pkg", "go.kamp.us", "package url")
	repo = flag.String("repo", "https://github.com/kamp-us/monorepo", "git repository")
)

func init() { flag.Parse() }

type Handler struct{}

var _ http.Handler = (*Handler)(nil)

func (h *Handler) ServeHTTP(
	w http.ResponseWriter,
	r *http.Request,
) {
	indexTmpl.Execute(w, struct {
		Pkg, Repo string
	}{
		Pkg:  *pkg,
		Repo: *repo,
	})
}

func main() {
	log.Printf("server listening at %d\n", *port)
	http.ListenAndServe(fmt.Sprintf(":%d", *port), &Handler{})
}

var indexTmpl = template.Must(template.New("index").Parse(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="go-import" content="{{.Pkg}} git {{.Repo}}">
    <meta name="go-source" content="{{.Pkg}} {{.Repo}} {{.Repo}}/tree/main{/dir} {{.Repo}}/blob/main{/dir}/{file}#L{line}">
</head>
<body>
    <pre>Redirecting...</pre>
    <script>document.onreadystatechange = () => (document.readyState == "complete" ? window.location.replace("{{.Repo}}") : null)</script>
</body>
</html>
`))
