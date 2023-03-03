import { GappedBox } from "@kampus/ui";
import type { FC } from "react";
import type { PostWithCommentCount } from "~/models/post.server";
import { PostItem } from "./PostItem";

type PostListProps = {
  posts: PostWithCommentCount[];
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
