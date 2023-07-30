"use client";

import { graphql, usePreloadedQuery } from "react-relay";

import { type SerializablePreloadedQuery } from "@kampus/relay";
import useSerializablePreloadedQuery from "@kampus/relay/use-serializable-preloaded-query";

import { type SozlukTermQuery } from "./__generated__/SozlukTermQuery.graphql";
import { SozlukTermBody } from "./SozlukTermBody";
import { SozlukTermTitle } from "./SozlukTermTitle";

interface Props {
  preloadedQuery: SerializablePreloadedQuery<SozlukTermQuery>;
}

export const SozlukTermContainer = (props: Props) => {
  const queryRef = useSerializablePreloadedQuery(props.preloadedQuery);

  const data = usePreloadedQuery(
    graphql`
      query SozlukTermQuery($id: ID!) {
        sozluk {
          term(id: $id) {
            body {
              ...SozlukTermBody_body
            }
            ...SozlukTermTitle_title
          }
        }
      }
    `,
    queryRef
  );

  const term = data.sozluk.term;

  return (
    <>
      <SozlukTermTitle term={data.sozluk.term} />
      <SozlukTermBody body={term?.body ?? null} />
    </>
  );
};
