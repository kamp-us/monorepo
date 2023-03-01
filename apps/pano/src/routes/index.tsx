import { CenteredContainer } from "@kampus/ui";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PostList } from "~/features/post/PostList";
import { PostSortFilters } from "~/features/post/PostSortFilters";
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
    <CenteredContainer css={{ mt: 20, gap: 20 }}>
      <PostSortFilters />
      <PostList posts={data} />
    </CenteredContainer>
  );
};

export default Home;
