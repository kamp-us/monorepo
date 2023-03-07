# [Kamp.us](https://kamp.us/) GraphQL

## Example Queries

### Pano Post Queries

#### Get all posts

```bash
curl -X POST -H 'Content-Type: application/json' -d '{"query": "{ posts() { ID, title, url, content, slug } }"}' localhost:8000/graphql
```

#### Get single post

```bash
curl -X POST -H 'Content-Type: application/json' -d '{"query": "{ post(input: { slug: \"post-slug-string\", id: \"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\" }) { ID, title, url, content, slug } }"}' localhost:8000/graphql
```

### Pano Post Mutation Query

```bash
curl -X POST -H 'Content-Type: application/json' -d '{"query": "mutation { createPost(input: { title: \"Kamp.us Pano\", url: \"https://kamp.us/pano\", content: \"hackernews clone\", userID: \"0000\" }) { ID, title, url, content, slug } }"}' localhost:8000/graphql
```
