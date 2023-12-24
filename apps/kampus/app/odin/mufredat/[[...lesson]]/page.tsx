import loadSerializableQuery from "@kampus/relay/load-serializable-query";

import OdinLessonQueryNode, {
  type OdinLessonQuery,
} from "~/app/odin/mufredat/[[...lesson]]/__generated__/OdinLessonQuery.graphql";
import { OdinLessonContainer } from "~/app/odin/mufredat/[[...lesson]]/OdinLesson";

export const dynamic = "force-dynamic";

export default async function OdinLessonPage({ params }: { params: { lesson: string[] } }) {
  const id = params.lesson ? params.lesson.join("/") : "mufredat";

  const preloadedQuery = await loadSerializableQuery<OdinLessonQuery>(OdinLessonQueryNode, {
    id,
  });

  return <OdinLessonContainer preloadedQuery={preloadedQuery} />;
}
