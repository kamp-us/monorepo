"use client";

import { graphql, usePreloadedQuery } from "react-relay";

import { type SerializablePreloadedQuery } from "~/features/relay";
import useSerializablePreloadedQuery from "~/features/relay/use-serializable-preloaded-query";
import { type PostListContainerQuery } from "./__generated__/PostListContainerQuery.graphql";
import { PanoFeed } from "./PanoFeed";

interface Props {
  preloadedQuery: SerializablePreloadedQuery<PostListContainerQuery>;
}

const query = graphql`
  query PostListContainerQuery($filter: PanoPostFilter) {
    viewer {
      ...PanoFeedFragment @arguments(filter: $filter)
      ...PanoFeed_viewer
    }
  }
`;

export const PostListContainer = (props: Props) => {
  const queryRef = useSerializablePreloadedQuery(props.preloadedQuery);
  const data = usePreloadedQuery(query, queryRef);

  if (!data.viewer) {
    return null;
  }

  return <PanoFeed panoFeed={data.viewer} panoViewer={data.viewer} />;
};
