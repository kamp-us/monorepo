"use client";

import { graphql, usePreloadedQuery } from "react-relay";

import { type SerializablePreloadedQuery } from "@kampus/relay";
import useSerializablePreloadedQuery from "@kampus/relay/use-serializable-preloaded-query";

import { type OdinLessonQuery } from "~/app/odin/[lesson]/__generated__/OdinLessonQuery.graphql";

interface Props {
  preloadedQuery: SerializablePreloadedQuery<OdinLessonQuery>;
}

export const OdinLessonContainer = (props: Props) => {
  const queryRef = useSerializablePreloadedQuery(props.preloadedQuery);

  const data = usePreloadedQuery(
    graphql`
      query OdinLessonQuery($id: ID!) {
        odin {
          lesson(id: $id) {
            title
            body {
              html
              raw
            }
          }
        }
      }
    `,
    queryRef
  );

  const lesson = data.odin.lesson;

  return (
    <>
      {/*<SozlukTermTitle term={data.sozluk.term} />*/}
      {/*<SozlukTermBody body={term?.body ?? null} />*/}
      {lesson?.title}
    </>
  );
};
