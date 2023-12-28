import { graphql, useFragment } from "react-relay";

import { getOdinGithubEditUrl, getOdinGithubIssueUrl } from "~/features/kampus-url/kampus-github";
import { type OdinLessonActions_path$key } from "./__generated__/OdinLessonActions_path.graphql";

interface Props {
  lesson: OdinLessonActions_path$key | null;
}

const useOdinLessonActionsFragment = (key: OdinLessonActions_path$key | null) =>
  useFragment(
    graphql`
      fragment OdinLessonActions_path on OdinLesson {
        title
        path
      }
    `,
    key
  );

export const OdinLessonActions = (props: Props) => {
  const lesson = useOdinLessonActionsFragment(props.lesson);
  if (!lesson?.path) return null;
  // https://github.com/kamp-us/monorepo/edit/dev/content/odin/foundations/installations/installation_overview.md
  const contributionUrl = getOdinGithubEditUrl(lesson.path);
  const issueUrl = getOdinGithubIssueUrl({ title: lesson.title, path: lesson.path });

  return (
    <div className="border-t-border border-t-2 pt-4">
      <ul className="flex gap-10">
        <li>
          <a href={contributionUrl}>Katkıda bulun</a>
        </li>
        <li>
          <a href={issueUrl}>Bir sorun bildir</a>
        </li>
      </ul>
    </div>
  );
};
