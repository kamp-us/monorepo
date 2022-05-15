import { ListPostsQuery, Post } from "~/API";
import { listPosts } from "~/graphql/queries";
import { CenteredContainer } from "~/ui-library/layout-components/CenteredContainer";
import { PostList } from "~/features/post/PostList";
import { LoaderFunction, useLoaderData } from "remix";
import { json } from "@remix-run/node";
import { SSRGQL } from "~/graphql/SSRGQL";

type LoaderData = {
  data: ListPostsQuery;
};

export const loader: LoaderFunction = async ({ request }) => {
  const data = await SSRGQL({ request, query: listPosts });

  if (!data) {
    return json(null, { status: 500 });
  }

  return { data };
};

export const Home = () => {
  const { data } = useLoaderData<LoaderData>();
  const posts = (data.listPosts?.items as Post[]) || [];
  const sortedPosts = [...posts].sort((a, b) =>
    a.createdAt < b.createdAt ? 1 : -1
  );

  return (
    <CenteredContainer css={{ paddingTop: 20 }}>
      <PostList posts={sortedPosts} />
    </CenteredContainer>
  );
};

export default Home;
