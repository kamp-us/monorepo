import { GappedBox } from "@kampus/ui";
import type { FC } from "react";
import { PostItem } from "./PostItem";
import type { Post } from "~/models/post.server";

type PostListProps = {
  posts: Post[];
  refetch?: () => void;
};

export const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <GappedBox
      css={{ flexDirection: "column", gap: 10 }}
      as="section"
      aria-label="Gönderi Listesi"
    >
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </GappedBox>
  );
};
