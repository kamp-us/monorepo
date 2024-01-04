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
    <div>
      <div className="border-t-border flex  items-center border-t-2 pb-10 pt-10">
        <a
          href={contributionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center pr-5 "
        >
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
            role="img"
            aria-labelledby="akf8xd22qgvodvabyjoo5b7bgv32eqah ai2pyzsqayie8laxlifwuinx2gd3jkef"
            className="mr-1 inline h-4 w-4 "
          >
            <title id="akf8xd22qgvodvabyjoo5b7bgv32eqah">Katkıda Bulunun</title>
            <desc id="ai2pyzsqayie8laxlifwuinx2gd3jkef">Github logo icon</desc>
            <path
              fill-rule="evenodd"
              d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Katkıda Bulunun</span>
        </a>

        <a
          href={issueUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center pr-5 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            role="img"
            aria-labelledby="arhldo6tk43zkkmh9ui2jutojq9glugs an9bgp6sjjksq60j6z9ev3nfzsbephyf"
            className="mr-1 inline h-4 w-4"
          >
            <title id="arhldo6tk43zkkmh9ui2jutojq9glugs">Bir sorun bildir</title>
            <desc id="an9bgp6sjjksq60j6z9ev3nfzsbephyf">Sorun icon</desc>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
            ></path>
          </svg>
          <span>Bir sorun bildir</span>
        </a>
      </div>
      <div className="text-center">
        <div className="rounded-lg">
          <div className="p-8">
            <div className="mx-auto flex max-w-sm flex-col justify-center space-y-6 md:max-w-full md:flex-row md:space-x-7 md:space-y-0">
              <a className="flex items-center px-4" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  role="img"
                  aria-labelledby="agu49ulynk8iw6yar2yo0kbabiiwyp9l as9346ukhy855cmcwf5qzq0x3ksvqc5l"
                  className="h-8 w-8 pr-2"
                >
                  <title id="agu49ulynk8iw6yar2yo0kbabiiwyp9l">Serüvene dön</title>
                  <desc id="as9346ukhy855cmcwf5qzq0x3ksvqc5l">Serüvene dön</desc>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  ></path>
                </svg>
                Serüvene dön
              </a>

              <a className="flex items-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  role="img"
                  aria-labelledby="a3kp6vg54a1g6uap47jdslkuc0m5cq4t ahzw39g540xc58vdxg9oxfmem81nmsa7"
                  className="h-6 pr-2 "
                >
                  <title id="a3kp6vg54a1g6uap47jdslkuc0m5cq4t">check</title>
                  <desc id="ahzw39g540xc58vdxg9oxfmem81nmsa7">checkmark icon</desc>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Ders tamamlandı</span>
              </a>

              <a className=" flex items-center px-4" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  role="img"
                  aria-labelledby="a30m79gobykvj1v3cvt96w9rqmb9y58n a2zneb84sw4bawu1wuj57lqh4ntd6nqx"
                  className="h-8 w-8 pr-2"
                >
                  <title id="a30m79gobykvj1v3cvt96w9rqmb9y58n">Sonraki Ders</title>
                  <desc id="a2zneb84sw4bawu1wuj57lqh4ntd6nqx">Sonraki Ders</desc>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Sonraki Ders
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
