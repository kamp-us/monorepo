"use client";

import { graphql, usePreloadedQuery } from "react-relay";

import { type SerializablePreloadedQuery } from "@kampus/relay";
import useSerializablePreloadedQuery from "@kampus/relay/use-serializable-preloaded-query";

import { type OdinLessonQuery } from "~/app/odin/mufredat/[[...lesson]]/__generated__/OdinLessonQuery.graphql";

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
    <div
      className="prose dark:prose-invert lg:prose-xl hover:prose-a:text-blue-500"
      dangerouslySetInnerHTML={{ __html: lesson?.body?.html ?? "" }}
    />
  );
};
