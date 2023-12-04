"use client";

import Markdown from "react-markdown";
import { graphql, usePreloadedQuery } from "react-relay";

import { type SerializablePreloadedQuery } from "@kampus/relay";
import useSerializablePreloadedQuery from "@kampus/relay/use-serializable-preloaded-query";

import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyInlineCode,
  TypographyList,
  TypographyP,
} from "~/../../packages/ui";
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
    <>
      <Markdown
        components={{
          h1: ({ ...props }) => <TypographyH1 {...props} />,
          h2: ({ ...props }) => <TypographyH2 {...props} />,
          h3: ({ ...props }) => <TypographyH3 {...props} />,
          h4: ({ ...props }) => <TypographyH4 {...props} />,
          p: ({ ...props }) => <TypographyP {...props} />,
          a: ({ ...props }) => (
            <a {...props} className="underline" target="_blank" rel="noopener noreferrer" />
          ),
          blockquote: ({ ...props }) => <TypographyBlockquote {...props} />,
          code: ({ ...props }) => <TypographyInlineCode {...props} />,
          ul: ({ ...props }) => <TypographyList {...props} />,
        }}
      >
        {lesson?.body.html}
      </Markdown>
    </>
  );
};
