import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { ListPostsQuery, ListPostsQueryVariables, Post } from "~/API";
import { PostList } from "~/features/post/PostList";
import { withSSR } from "~/features/utils/amplify/withSSR";
import { listPosts } from "~/graphql/queries";
import { CenteredContainer } from "~/ui-library";

type LoaderData = {
  data: ListPostsQuery;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const { graphql } = withSSR({ request });

  const sitename = params["*"];

  if (!sitename) return json(null, { status: 400 });

  const data = await graphql<ListPostsQueryVariables>({
    query: listPosts,
    variables: {
      filter: { site: { eq: sitename } },
    },
  });

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
