import { Suspense } from "react";
import { graphql, type PreloadedQuery, usePreloadedQuery } from "react-relay";
import { SozlukTermBody } from "./SozlukTermBody";
import { SozlukTermTitle } from "./SozlukTermTitle";
import { type SozlukTermQuery } from "./__generated__/SozlukTermQuery.graphql";

interface Props {
  queryRef: PreloadedQuery<SozlukTermQuery>;
}

export const SozlukTermContainer = (props: Props) => {
  const data = usePreloadedQuery(
    graphql`
      query SozlukTermQuery($id: ID!) {
        sozluk {
          term(input: { id: $id }) {
            body {
              ...SozlukTermBody_body
            }
            ...SozlukTermTitle_title
          }
        }
      }
    `,
    props.queryRef
  );

  const term = data.sozluk.term;

  return (
    <Suspense fallback="loading ...">
      <SozlukTermTitle term={data.sozluk.term} />
      <SozlukTermBody body={term?.body ?? null} />
    </Suspense>
  );
};
