import { graphql, useFragment } from "react-relay";

import { type OdinLessonTitle_title$key } from "./__generated__/OdinLessonTitle_title.graphql";

import curriculumList, { Curriculum } from "../../curriculum-list";

const getCurrentCurri = (curriculum: Curriculum[], currentTitle: string): { name: string, url: string } | null => {
  for (let curriculumItem of curriculum) {
    for (let section of curriculumItem.sections) {
      for (let lesson of section.lessons) {
        if (lesson.title === currentTitle) {
          return { name: curriculumItem.name, url: curriculumItem.url };
        }
      }
    }
  }
  return null;
};



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
  const currentTitle = lesson ? lesson.title : null;

  let currentCurriculumUrl = null;
  let currentCurriculumName = null;
  if (currentTitle) {
    const currentCurri = getCurrentCurri(curriculumList.curriculum, currentTitle);
    currentCurriculumUrl = currentCurri?.url;
    currentCurriculumName = currentCurri?.name;
  }


  return <header className="mb-10 mt-2">
      <div className="flex flex-col items-center mb-2 space-y-4 xl:space-y-0 xl:space-x-4 xl:flex-row
       xl:justify-start">
      <a href={currentCurriculumUrl || undefined} className="flex items-center justify-center w-24 h-24 bg-gray-200 rounded-full">
        <img src="https://github.com/kamp-us/monorepo/assets/107408663/7317463f-fb13-403a-bf46-7db7fd734266" alt="Lesson Icon" />
      </a>
      <div className="text-center xl:text-left">
          <h2 className="text-3xl font-bold">{lesson?.title}</h2>
          <a className="text-lg font-light" href={currentCurriculumUrl || undefined}>{currentCurriculumName}</a>
        </div>
      </div>
    </header>
};
