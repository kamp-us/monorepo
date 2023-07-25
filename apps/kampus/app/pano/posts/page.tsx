import { PostSortFilters } from "~/app/pano/features/post/PostSortFilters";

export default function PostsPage() {
  const posts = [
    { id: 1, title: "Post1" },
    { id: 2, title: "Post2" },
    { id: 3, title: "Post3" },
  ];

  return (
    <div>
      <PostSortFilters />
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <a href={`/pano/post/${post.id}`}>{post.title}</a>
          </div>
        );
      })}
    </div>
  );
}
