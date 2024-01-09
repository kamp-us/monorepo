import { Link } from "@radix-ui/themes";
import { graphql, useFragment } from "react-relay";

import { getOdinGithubEditUrl, getOdinGithubIssueUrl } from "~/features/kampus-url/kampus-github";
import curriculumList, { Curriculum } from "../../curriculum-list";
import { type OdinLessonActions_path$key } from "./__generated__/OdinLessonActions_path.graphql";

import { Button } from "@radix-ui/themes";
import { GitHubLogoIcon, ExclamationTriangleIcon, RocketIcon, ArrowRightIcon } from '@radix-ui/react-icons'

const getNextLesson = (curriculum: Curriculum[], currentTitle: string) => {
  let currentCurriculumUrl = null;
  let nextLessonUrl = null;
  
  for (let i = 0; i < curriculum.length; i++) {
    const lessons = (curriculum[i]?.sections || []).flatMap((section) =>
      section.lessons.map((lesson) => {
        if (lesson.title === currentTitle) {

          currentCurriculumUrl = `/odin/${curriculum[i]?.url}`;
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
        nextLessonUrl = currentCurriculumUrl;
      }
      break;
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

  const { nextLessonUrl, currentCurriculumUrl } = getNextLesson(
    curriculumList.curriculum,
    currentTitle
  );

  return (
    <div className="border-t-border flex justify-center border-t-2 ">
      <div className="prose dark:prose-invert hover:prose-a:text-blue-500 flex flex-col items-center  ">
        <div className="flex justify-evenly py-10 ">
          <a
            href={contributionUrl || undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 no-underline"
          >
            <GitHubLogoIcon className="mr-1 inline h-4 w-4" />
            <span>Katkıda Bulunun</span>
          </a>

          <a
            href={issueUrl || undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 no-underline"
          >
            <ExclamationTriangleIcon className="mr-1 inline h-4 w-4" />
            <span>Bir sorun bildir</span>
          </a>
        </div>
        <div className="text-center">
          <div className="rounded-lg">
            <div className="p-8">
              <div className="mx-auto flex max-w-sm flex-col justify-center items-center space-y-6 md:max-w-full md:flex-row md:space-x-7 md:space-y-0">
                <Button size="3">
                  <a className="flex items-center px-4" href={currentCurriculumUrl || undefined}>
                    <RocketIcon className="h-8 w-8 pr-2" />
                    Serüvene dön
                  </a>
                </Button>
                <Button size="3">
                  <a href={nextLessonUrl || undefined}>
                    <div className="flex items-center px-4">
                      <ArrowRightIcon className="h-8 w-8 pr-2" />
                      Sonraki Ders
                    </div>
                  </a>
                  </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
