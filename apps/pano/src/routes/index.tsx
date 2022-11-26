import { CenteredContainer } from "@kampus/ui";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PostList } from "~/features/post/PostList";
import type { Post } from "~/models/post.server";
import { getAllPosts } from "~/models/post.server";

type LoaderData = {
  allPosts: Post[];
  oldPosts: Post[];
};

export const loader: LoaderFunction = async () => {
  const allPosts = await getAllPosts();
  const oldPosts = await getAllPosts();

  return json<LoaderData>({
    allPosts,
    oldPosts,
  });
};

export const Home = () => {
  const { allPosts, oldPosts } = useLoaderData<LoaderData>();

  return (
    <CenteredContainer css={{ paddingTop: 20 }}>
      <PostList posts={oldPosts} />
    </CenteredContainer>
  );
};

export default Home;
