import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PostList } from "~/features/post/PostList";
import type { Post } from "~/models/post.server";
import { searchPosts } from "~/models/post.server";
import { CenteredContainer, Text } from "~/ui-library";

type LoaderDataSuccess = {
  query: string;
  data: Post[];
};

type LoaderDataError = {
  status: number;
  error: string;
};

type LoaderData = LoaderDataSuccess | LoaderDataError;

const isError = (data: LoaderData): data is LoaderDataError => {
  return (data as LoaderDataError).error !== undefined;
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get("q");
  if (!searchQuery) {
    return json<LoaderData>({ status: 400, error: "Query is required" });
  }

  try {
    const posts = await searchPosts(searchQuery);
    return json({ data: posts, query: searchQuery });
  } catch (e) {
    return {
      status: 500,
      error: e,
    };
  }
};

export const Search = () => {
  const loaderData = useLoaderData<LoaderData>();

  if (isError(loaderData)) {
    return (
      <>
        <CenteredContainer css={{ paddingTop: 20 }}>
          <Text as="h1">Arama Sonuçları - Hata</Text>
        </CenteredContainer>
      </>
    );
  }

  const { query, data } = loaderData;

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
