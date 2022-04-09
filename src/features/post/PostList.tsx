import { Post } from "../../API";
import React, { FC } from "react";
import { PostItem } from "./PostItem";
import { styled } from "@stitches/react";

type PostListProps = {
  posts: Post[];
  refetch: () => void;
};

export const PostList: FC<PostListProps> = ({ posts, refetch }) => {
  return (
    <Container>
      {posts.map((post, index) => {
        return <PostItem refetch={refetch} key={index} post={post} />;
      })}
    </Container>
  );
};

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 10,
});
