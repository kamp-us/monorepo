"use client";

import { type SerializablePreloadedQuery, useSerializablePreloadedQuery } from "@kampus/relay";
import { useRelayEnvironment } from "react-relay";
import { SozlukTermContainer } from "./SozlukTerm";
import type SozlukTermQueryNode from "./__generated__/SozlukTermQuery.graphql";
import type { SozlukTermQuery } from "./__generated__/SozlukTermQuery.graphql";

interface Props {
  preloadedQuery: SerializablePreloadedQuery<typeof SozlukTermQueryNode, SozlukTermQuery>;
}

export const SozlukTermClientComponent = (props: Props) => {
  const environment = useRelayEnvironment();
  const queryRef = useSerializablePreloadedQuery(environment, props.preloadedQuery);

  return <SozlukTermContainer queryRef={queryRef} />;
};
