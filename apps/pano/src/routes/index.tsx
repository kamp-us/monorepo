import { CenteredContainer } from "@kampus/ui";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PostList } from "~/features/post/PostList";
import { getAllPosts } from "~/models/post.server";

export const loader = async () => {
  const allPosts = await getAllPosts();
  return json({
    data: allPosts,
  });
};

export const Home = () => {
  const { data } = useLoaderData<typeof loader>();

  if (!data) {
    return null;
  }

  return (
    <CenteredContainer css={{ paddingTop: 20 }}>
      <PostList posts={data} />
    </CenteredContainer>
  );
};

export default Home;
