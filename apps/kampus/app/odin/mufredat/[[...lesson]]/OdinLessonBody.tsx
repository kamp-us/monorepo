import { graphql, useFragment } from "react-relay";

import { type OdinLessonBody_body$key } from "./__generated__/OdinLessonBody_body.graphql";

interface Props {
  body: OdinLessonBody_body$key | null;
}

const useOdinLessonBodyFragment = (key: OdinLessonBody_body$key | null) =>
  useFragment(
    graphql`
      fragment OdinLessonBody_body on OdinLessonBody {
        html
      }
    `,
    key
  );

export const OdinLessonBody = (props: Props) => {
  const body = useOdinLessonBodyFragment(props.body);

  return (
    <div
      className="prose dark:prose-invert hover:prose-a:text-blue-500"
      dangerouslySetInnerHTML={{ __html: body?.html ?? "" }}
    />
  );
};
