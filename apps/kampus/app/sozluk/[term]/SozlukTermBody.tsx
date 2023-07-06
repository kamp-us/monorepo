import { graphql, useFragment } from "react-relay";

import { type SozlukTermBody_body$key } from "./__generated__/SozlukTermBody_body.graphql";

interface Props {
  body: SozlukTermBody_body$key | null;
}

const useSozlukTermBodyFragment = (key: SozlukTermBody_body$key | null) =>
  useFragment(
    graphql`
      fragment SozlukTermBody_body on SozlukTermBody {
        html
      }
    `,
    key
  );

export const SozlukTermBody = (props: Props) => {
  const body = useSozlukTermBodyFragment(props.body);

  return <div dangerouslySetInnerHTML={{ __html: body?.html ?? "" }} />;
};
