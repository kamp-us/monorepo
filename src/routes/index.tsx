import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import { PostList } from "~/features/post/PostList";
import {
  getActivePosts,
  getAllPosts,
  getMostCommentedPosts,
  Post,
} from "~/models/post.server";
import { PostSorter } from "~/ui-library/PostSorter";
import { CenteredContainer } from "~/ui-library/layout-components/CenteredContainer";

type LoaderData = {
  data: { allPosts: Post[]; activePosts: Post[]; mostCommentedPosts: Post[] };
};

export const loader: LoaderFunction = async () => {
  const allPosts = await getAllPosts();
  const activePosts = await getActivePosts();
  const mostCommentedPosts = await getMostCommentedPosts();
  return json<LoaderData>({
    data: { allPosts, activePosts, mostCommentedPosts },
  });
};

export const Home = () => {
  const { data } = useLoaderData<LoaderData>();
  const { allPosts, activePosts, mostCommentedPosts } = data;

  const [sort, setSort] = React.useState<"all" | "active" | "comments">("all");
  const posts =
    sort === "all"
      ? allPosts
      : sort === "active"
      ? activePosts
      : mostCommentedPosts;

  return (
    <CenteredContainer css={{ paddingTop: 20 }}>
      <PostSorter sort={sort} setSort={setSort} />
      <PostList posts={posts} />
    </CenteredContainer>
  );
};

export default Home;
