import {
  ArrowRightIcon,
  ExclamationTriangleIcon,
  GitHubLogoIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { Box, Button, Card, Flex, Separator } from "@radix-ui/themes";
import { graphql, useFragment } from "react-relay";

import { getOdinGithubEditUrl, getOdinGithubIssueUrl } from "~/features/kampus-url/kampus-github";
import curriculumList, { Curriculum } from "../../curriculum-list";
import { type OdinLessonActions_path$key } from "./__generated__/OdinLessonActions_path.graphql";

const getNextLesson = (currentTitle: string) => {
  let currentCurriculumUrl = null;
  let nextLessonUrl = null;

  for (let curriculumName in curriculumList) {
    const curriculumItem = (curriculumList as { [key: string]: Curriculum })[curriculumName];
    if (curriculumItem) {
      const lessons = (curriculumItem.sections || []).flatMap((section) =>
        section.lessons.map((lesson) => {
          if (lesson.title === currentTitle) {
            currentCurriculumUrl = `/odin/${curriculumItem.url}`;
          }
          return {
            title: lesson.title,
            url: lesson.url,
          };
        })
      );

      let currentLessonIndex = lessons.findIndex((lesson) => lesson.title === currentTitle);

      if (currentLessonIndex !== -1) {
        while (lessons[currentLessonIndex + 1]?.url === "#") {
          currentLessonIndex++;
        }
        nextLessonUrl = `${currentCurriculumUrl}/${lessons[currentLessonIndex + 1]?.url}`;
        if (currentLessonIndex === lessons.length - 1) {
          nextLessonUrl = null;
        }
        break;
      }
    }
  }

  return { nextLessonUrl, currentCurriculumUrl };
};
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

  const currentTitle = lesson.title;

  const { nextLessonUrl, currentCurriculumUrl } = getNextLesson(currentTitle);

  return (
    <Box>
      <Separator orientation="horizontal" size="4" />
      <Flex justify="center" my="4">
        <Flex align="center" m="4">
          <GitHubLogoIcon className="mx-1 h-4 w-4" />
          <a href={contributionUrl || undefined} target="_blank" rel="noopener noreferrer">
            Katkıda Bulunun
          </a>
        </Flex>
        <Flex align="center" m="4">
          <ExclamationTriangleIcon className="mx-1 h-4 w-4" />
          <a href={issueUrl || undefined} target="_blank" rel="noopener noreferrer">
            Bir sorun bildir
          </a>
        </Flex>
      </Flex>
      <Card my="4">
        <Flex
          direction={{
            initial: "column",
            xs: "row",
          }}
          justify={"center"}
          p="4"
        >
          <Box p="5" m="4" asChild>
            <Button size="3">
              <RocketIcon className="h-8 w-8" />
              <a href={currentCurriculumUrl || undefined}>Serüvene dön</a>
            </Button>
          </Box>
          {nextLessonUrl && (
          <Box p="5" m="4" asChild>
            <Button size="3">
              <ArrowRightIcon className="h-8 w-8" />
              <a href={nextLessonUrl || undefined}>Sonraki Ders</a>
            </Button>
            </Box>
          )}
        </Flex>
      </Card>
    </Box>
  );
};
