import { CenteredContainer } from "~/ui-library/layout-components/CenteredContainer";
import { PostList } from "~/features/post/PostList";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Post } from "@prisma/client";
import { getAllPosts } from "~/models/post.server";

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
