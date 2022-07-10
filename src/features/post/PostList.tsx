import type { Post } from "~/API";
import type { FC } from "react";
import { PostItem } from "./PostItem";
import { Box } from "~/ui-library";

type PostListProps = {
  posts: Post[];
  refetch?: () => void;
};

export const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <Box as="section" aria-label="Gönderi Listesi">
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </Box>
  );
};
