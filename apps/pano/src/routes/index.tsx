import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PostList } from "~/features/post/PostList";
import type { Post } from "~/models/post.server";
import { getAllPosts } from "~/models/post.server";
import { CenteredContainer } from "~/ui-library";

type LoaderData = {
  data: Post[];
};

export const loader: LoaderFunction = async () => {
  const allPosts = await getAllPosts();
  return json<LoaderData>({
    data: allPosts,
  });
};

export const Home = () => {
  const { data } = useLoaderData<LoaderData>();

  return (
    <CenteredContainer css={{ paddingTop: 20 }}>
      <PostList posts={data} />
    </CenteredContainer>
  );
};

export default Home;
