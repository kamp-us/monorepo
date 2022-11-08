import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PostList } from "~/features/post/PostList";
import { getAllPosts, Post } from "~/models/post.server";
import { CenteredContainer } from "~/ui-library/layout-components/CenteredContainer";

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
