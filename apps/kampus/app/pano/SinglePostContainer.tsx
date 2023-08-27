"use client";

import { graphql, usePreloadedQuery } from "react-relay";

import { type SerializablePreloadedQuery } from "@kampus/relay";
import useSerializablePreloadedQuery from "@kampus/relay/use-serializable-preloaded-query";

import { SinglePostContainerQuery } from "./__generated__/SinglePostContainerQuery.graphql";
import { SinglePostFeed } from "./SinglePostFeed";

interface Props {
  preloadedQuery: SerializablePreloadedQuery<SinglePostContainerQuery>;
}

const query = graphql`
  query SinglePostContainerQuery($id: ID!) {
    viewer {
      ...SinglePostFeed_viewer
    }
    pano {
      post(id: $id) {
        ...SinglePostFeed_post
      }
    }
  }
`;

export const SinglePostContainer = (props: Props) => {
  const queryRef = useSerializablePreloadedQuery(props.preloadedQuery);
  const data = usePreloadedQuery(query, queryRef);

  if (!data.pano.post) {
    return null;
  }

  if (!data.viewer) {
    return null;
  }

  return (
    <div>
      <SinglePostFeed viewer={data.viewer} post={data.pano.post} />
    </div>
  );
};
