import { ListPostsQuery, Post } from "~/API";
import { listPosts } from "~/graphql/queries";
import { CenteredContainer } from "~/ui-library/layout-components/CenteredContainer";
import { PostList } from "~/features/post/PostList";
import { json, LoaderFunction, useLoaderData } from "remix";
import { withSSR } from "~/features/utils/amplify/withSSR";

type LoaderData = {
  data: ListPostsQuery;
};

export const loader: LoaderFunction = async ({ request }) => {
  const { graphql } = withSSR({ request });
  const data = await graphql({ query: listPosts });

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
