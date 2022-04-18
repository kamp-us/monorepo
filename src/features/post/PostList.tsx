import { Post } from "../../API";
import { FC } from "react";
import { PostItem } from "./PostItem";
import { Box } from "../../ui-library/layout-components/Box";

type PostListProps = {
  posts: Post[];
  refetch?: () => void;
};

export const PostList: FC<PostListProps> = ({ posts, refetch }) => {
  return (
    <Box>
      {posts.map((post) => {
        return <PostItem onUpvoteSuccess={refetch} key={post.id} post={post} />;
      })}
    </Box>
  );
};
