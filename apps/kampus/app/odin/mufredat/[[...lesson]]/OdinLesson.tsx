"use client";

import { graphql, usePreloadedQuery } from "react-relay";

import { type SerializablePreloadedQuery } from "~/features/relay";
import useSerializablePreloadedQuery from "~/features/relay/use-serializable-preloaded-query";
import { type OdinLessonQuery } from "~/app/odin/mufredat/[[...lesson]]/__generated__/OdinLessonQuery.graphql";
import { OdinLessonBody } from "./OdinLessonBody";
import { OdinLessonTitle } from "./OdinLessonTitle";

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
            body {
              ...OdinLessonBody_body
            }
            ...OdinLessonTitle_title
          }
        }
      }
    `,
    queryRef
  );

  const lesson = data.odin.lesson;

  return (
    <>
      <OdinLessonTitle lesson={data.odin.lesson} />
      <OdinLessonBody body={lesson?.body ?? null} />
    </>
  );
};
