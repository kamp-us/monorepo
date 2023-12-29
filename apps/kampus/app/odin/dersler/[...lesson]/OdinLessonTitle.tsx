import { graphql, useFragment } from "react-relay";

import { type OdinLessonTitle_title$key } from "./__generated__/OdinLessonTitle_title.graphql";

interface Props {
  lesson: OdinLessonTitle_title$key | null;
}

const useOdinLessonTitleFragment = (key: OdinLessonTitle_title$key | null) =>
  useFragment(
    graphql`
      fragment OdinLessonTitle_title on OdinLesson {
        title
      }
    `,
    key
  );

export const OdinLessonTitle = (props: Props) => {
  const lesson = useOdinLessonTitleFragment(props.lesson);

  return <h2 className="text-3xl font-bold">{lesson?.title}</h2>;
};
