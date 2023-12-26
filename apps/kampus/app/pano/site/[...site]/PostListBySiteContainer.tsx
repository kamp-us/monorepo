"use client";

import { graphql, usePreloadedQuery } from "react-relay";

import { type SerializablePreloadedQuery } from "~/features/relay";
import useSerializablePreloadedQuery from "~/features/relay/use-serializable-preloaded-query";
import { type PostListBySiteContainerQuery } from "./__generated__/PostListBySiteContainerQuery.graphql";
import { PanoFeedBySite } from "./PanoFeedBySite";

interface Props {
  preloadedQuery: SerializablePreloadedQuery<PostListBySiteContainerQuery>;
}

const query = graphql`
  query PostListBySiteContainerQuery($site: String!) {
    viewer {
      ...PanoFeedBySiteFragment @arguments(site: $site)
      ...PanoFeedBySite_viewer
    }
  }
`;

export const PostListBySiteContainer = (props: Props) => {
  const queryRef = useSerializablePreloadedQuery(props.preloadedQuery);
  const data = usePreloadedQuery(query, queryRef);

  if (!data.viewer) {
    return null;
  }

  return <PanoFeedBySite panoFeedBySite={data.viewer} panoViewerBySite={data.viewer} />;
};
