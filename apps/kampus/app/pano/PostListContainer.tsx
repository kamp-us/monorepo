"use client";

import { graphql, usePreloadedQuery } from "react-relay";

import { type SerializablePreloadedQuery } from "@kampus/relay";
import useSerializablePreloadedQuery from "@kampus/relay/use-serializable-preloaded-query";

import { type PostListContainerQuery } from "./__generated__/PostListContainerQuery.graphql";
import { PanoFeed } from "./PanoFeed";

interface Props {
  preloadedQuery: SerializablePreloadedQuery<PostListContainerQuery>;
}

const query = graphql`
  query PostListContainerQuery {
    viewer {
      ...PanoFeedFragment
      actor {
        ...PanoFeed_viewer
      }
    }
  }
`;

export const PostListContainer = (props: Props) => {
  const queryRef = useSerializablePreloadedQuery(props.preloadedQuery);
  const data = usePreloadedQuery(query, queryRef);
  console.log(data);

  if (!data.viewer) {
    return null;
  }

  return <PanoFeed panoFeed={data.viewer} panoViewer={data.viewer.actor} />;
};
