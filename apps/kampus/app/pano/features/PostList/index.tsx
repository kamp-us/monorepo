import { PostItem } from "./PostItem";

type Post = {
  __typename?: "PanoPost";
  content: string;
  createdAt: string;
  id: string;
  owner: string;
  title: string;
  url: string;
};

interface PostListProps {
  posts: Post[];
}

export const PostList = (props: PostListProps) => {
  const { posts } = props;

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </div>
  );
};
