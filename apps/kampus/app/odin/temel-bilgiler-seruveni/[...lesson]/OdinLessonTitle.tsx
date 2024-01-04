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

  return <header className="mb-10 mt-2">
      <div className="flex flex-col items-center mb-2 space-y-4 xl:space-y-0 xl:space-x-4 xl:flex-row
       xl:justify-start">
      <a href="#" className="flex items-center justify-center w-24 h-24 bg-gray-200 rounded-full">
        <img src="https://github.com/kamp-us/monorepo/assets/107408663/7317463f-fb13-403a-bf46-7db7fd734266" alt="Lesson Icon" />
      </a>
      <div className="text-center xl:text-left">
          <h2 className="text-3xl font-bold">{lesson?.title}</h2>
          <p className="text-lg font-light">Current Serüven</p>
        </div>
      </div>
    </header>
};
