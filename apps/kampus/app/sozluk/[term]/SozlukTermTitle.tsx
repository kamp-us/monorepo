import { graphql, useFragment } from "react-relay";
import { type SozlukTermTitle_title$key } from "./__generated__/SozlukTermTitle_title.graphql";

interface Props {
  term: SozlukTermTitle_title$key | null;
}

const useSozlukTermTitleFragment = (key: SozlukTermTitle_title$key | null) =>
  useFragment(
    graphql`
      fragment SozlukTermTitle_title on SozlukTerm {
        title
      }
    `,
    key
  );

export const SozlukTermTitle = (props: Props) => {
  const term = useSozlukTermTitleFragment(props.term);

  return <h2 className="text-3xl font-bold">{term?.title}</h2>;
};
