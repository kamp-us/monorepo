import DataLoader from "dataloader";
import hash from "object-hash";

import { type Connection, type ConnectionArguments } from "@kampus/gql-utils/connection";
import { allLessons, type Lesson } from "@kampus/tr-odin-project-content";

import { applyPagination, generatePageInfo } from "~/features/relay/pagination";

export const createOdinLoaders = () => {
  return {
    lesson: createLessonLoader(),
    lessons: createLessonsLoader(),
  };
};

export type OdinLessonLoader = ReturnType<typeof createLessonLoader>;
export type OdinLessonsLoader = ReturnType<typeof createLessonsLoader>;

export const transformOdinLesson = (lesson: Lesson) => {
  return {
    __typename: "OdinLesson" as const,
    id: lesson.id,
    title: lesson.title,
    body: {
      raw: lesson.body.raw,
      html: lesson.html,
    },
  };
};

export const transformOdinLessonsConnection = (connection: Connection<Lesson>) => ({
  ...connection,
  nodes: connection.nodes.map(transformOdinLesson),
  edges: connection.edges.map((edge) => ({ ...edge, node: transformOdinLesson(edge.node) })),
  pageInfo: {
    ...connection.pageInfo,
    endCursor: connection.pageInfo.endCursor ?? null,
    startCursor: connection.pageInfo.startCursor ?? null,
  },
  totalCount: connection.totalCount,
});

const loadLesson = (id: string) => {
  const lesson = allLessons.find((lesson) => lesson.id === id);
  if (!lesson) {
    return null;
  }
  return Promise.resolve(lesson);
};

const createLessonLoader = () =>
  new DataLoader<string, Lesson>(async (keys) => {
    return await Promise.all(
      keys.map(async (key) => {
        const lesson = await loadLesson(key);
        if (!lesson) {
          return new Error(`Lesson not found for: ${key}`);
        }
        return lesson;
      })
    );
  });

const createLessonsLoader = () =>
  new DataLoader<ConnectionArguments, Connection<Lesson>, string>(
    // eslint-disable-next-line @typescript-eslint/require-await
    async (keys) => {
      const results: Connection<Lesson>[] = [];

      for (const key of keys) {
        const nodes = applyPagination({ data: allLessons, ...key });
        const edges = nodes.map((lesson) => ({ cursor: lesson.id, node: lesson }));

        const result = {
          nodes,
          edges,
          pageInfo: generatePageInfo({ data: allLessons, ...key }),
          totalCount: allLessons.length,
        };

        results.push(result);
      }
      return results;
    },
    {
      cacheKeyFn: (key) => hash(key),
    }
  );
