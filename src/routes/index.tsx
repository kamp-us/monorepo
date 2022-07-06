import { Post } from "~/API";
import { CenteredContainer } from "~/ui-library/layout-components/CenteredContainer";
import { PostList } from "~/features/post/PostList";
import { json, LoaderFunction, useLoaderData } from "remix";
import { withSSR } from "~/features/utils/amplify/withSSR";
import { indexPageQuery } from "./index-page-query.server";

type LoaderData = {
  data: Post[];
};

export const loader: LoaderFunction = async ({ request }) => {
  const { graphql } = withSSR({ request });
  const data = await graphql({ query: indexPageQuery, variables: {} });

  if (!data) {
    return json(null, { status: 500 });
  }

  const posts = (data.listPosts?.items as Post[]) || [];
  const sortedPosts = [...posts].sort((a, b) =>
    a.createdAt < b.createdAt ? 1 : -1
  );

  return { data: sortedPosts };
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
