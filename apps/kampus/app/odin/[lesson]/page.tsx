import loadSerializableQuery from "@kampus/relay/load-serializable-query";

import OdinLessonQueryNode, {
  type OdinLessonQuery,
} from "~/app/odin/[lesson]/__generated__/OdinLessonQuery.graphql";
import { OdinLessonContainer } from "~/app/odin/[lesson]/OdinLesson";

export default async function OdinLessonPage({ params }: { params: { lesson: string } }) {
  const preloadedQuery = await loadSerializableQuery<OdinLessonQuery>(OdinLessonQueryNode, {
    id: params.lesson,
  });

  return <OdinLessonContainer preloadedQuery={preloadedQuery} />;
}
