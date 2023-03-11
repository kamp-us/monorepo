import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "react-router-dom";
import { PostList } from "~/features/post/PostList";
import type { Timeframe, PostWithCommentCount } from "~/models/post.server";
import { getMostCommentedPosts } from "~/models/post.server";

type LoaderData = {
  posts: PostWithCommentCount[];
};

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const timeframe = (url.searchParams.get("timeframe") || "all") as Timeframe;

  const posts = await getMostCommentedPosts(timeframe);

  return json<LoaderData>({ posts });
};

export const MostCommentedPosts = () => {
  const { posts } = useLoaderData();

  return <PostList posts={posts} />;
};

export default MostCommentedPosts;
