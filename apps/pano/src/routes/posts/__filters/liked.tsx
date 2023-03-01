import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "react-router-dom";
import { json } from "react-router-dom";
import { PostList } from "~/features/post/PostList";
import type { PostWithCommentCount } from "~/models/post.server";
import { getMostUpvotedPosts } from "~/models/post.server";

type LoaderData = {
  posts: PostWithCommentCount[];
};

export const loader: LoaderFunction = async () => {
  const posts = await getMostUpvotedPosts();

  return json<LoaderData>({ posts });
};

export const MostUpvotedPosts = () => {
  const { posts } = useLoaderData();

  return <PostList posts={posts} />;
};

export default MostUpvotedPosts;
