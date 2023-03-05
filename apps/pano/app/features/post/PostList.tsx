import { GappedBox } from "@kampus/ui";
import type { SerializeFrom } from "@remix-run/node";
import type { FC } from "react";
import { PostItem } from "./PostItem";
import type { PostWithCommentCount } from "~/models/post.server";

type PostListProps = {
  posts: SerializeFrom<PostWithCommentCount[]>;
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
