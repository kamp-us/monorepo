import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Post, SearchPageQuery, SearchPageQueryVariables } from "~/API";
import { CenteredContainer } from "~/ui-library/layout-components/CenteredContainer";
import { withSSR } from "~/features/utils/amplify/withSSR";
import { PostList } from "~/features/post/PostList";
import { Text } from "~/ui-library";
import { searchPageQuery } from "./search-page-query.server";

type LoaderDataSuccess = {
  query: string;
  data: Post[];
};

type LoaderData = LoaderDataSuccess;

export const loader: LoaderFunction = async ({ request }) => {
  const { graphql } = withSSR({ request });
  const url = new URL(request.url);

  const searchQuery = url.searchParams.get("q");

  if (!searchQuery) {
    return json({ data: { searchPosts: null } });
  }

  try {
    const data = await graphql<SearchPageQueryVariables, SearchPageQuery>({
      query: searchPageQuery,
      variables: {
        filter: {
          title: {
            wildcard: `*${searchQuery}*`,
          },
        },
      },
    });

    const posts = (data.searchPosts?.items as Post[]) || [];
    const sortedPosts = [...posts].sort((a, b) =>
      a.createdAt < b.createdAt ? 1 : -1
    );

    console.log(data);

    return json({
      data: sortedPosts,
      query: searchQuery,
    });
  } catch (e) {
    return {
      status: 500,
      error: e,
    };
  }
};

export const Search = () => {
  const { data, query = "" } = useLoaderData<LoaderData>();

  return (
    <>
      <CenteredContainer css={{ paddingTop: 20 }}>
        <Text as="h1">Arama Sonuçları - {query}</Text>
        <PostList posts={data} />
      </CenteredContainer>
    </>
  );
};

export default Search;
