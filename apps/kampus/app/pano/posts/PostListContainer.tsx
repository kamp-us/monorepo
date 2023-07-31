"use client";

import { graphql, usePreloadedQuery } from "react-relay";

import { type SerializablePreloadedQuery } from "@kampus/relay";
import useSerializablePreloadedQuery from "@kampus/relay/use-serializable-preloaded-query";

import { PostItem } from "../features/post-list/PostItem";
import { type PostListContainerQuery } from "./__generated__/PostListContainerQuery.graphql";
import { AllPosts } from "./AllPosts";

interface Props {
  preloadedQuery: SerializablePreloadedQuery<PostListContainerQuery>;
}

const query = graphql`
  query PostListContainerQuery {
    ...AllPostsFragment
  }
`;

export const PostListContainer = (props: Props) => {
  const queryRef = useSerializablePreloadedQuery(props.preloadedQuery);

  const data = usePreloadedQuery(query, queryRef);

  return <AllPosts allPosts={data} />;
};
