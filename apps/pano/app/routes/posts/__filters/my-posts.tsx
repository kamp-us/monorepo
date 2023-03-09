import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "react-router-dom";
import { json } from "react-router-dom";
import { authenticator } from "~/authenticator.server";
import { PostList } from "~/features/post/PostList";
import type { PostWithCommentCount } from "~/models/post.server";
import { getMyPosts } from "~/models/post.server";
import { User } from "~/models/user.server";

type LoaderData = {
  posts: PostWithCommentCount[];
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = (await authenticator.isAuthenticated(request)) as User | null;
  const posts = user ? await getMyPosts(user.id) : [];
  return json<LoaderData>({ posts });
};

export const MyPosts = () => {
  const { posts } = useLoaderData();
  return <PostList posts={posts} />;
};

export default MyPosts;
