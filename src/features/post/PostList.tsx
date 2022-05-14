import { Collection, Post } from "~/API";
import { FC } from "react";
import { PostItem } from "./PostItem";
import { Box } from "~/ui-library";

type PostListProps = {
  posts: Post[];
  collections: Collection[];
};

export const PostList: FC<PostListProps> = ({ posts, collections }) => {
  return (
    <Box>
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} collections={collections} />;
      })}
    </Box>
  );
};
