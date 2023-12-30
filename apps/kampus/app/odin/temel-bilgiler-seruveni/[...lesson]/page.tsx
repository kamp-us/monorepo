import loadSerializableQuery from "~/features/relay/load-serializable-query";
import OdinLessonQueryNode, { type OdinLessonQuery } from "./__generated__/OdinLessonQuery.graphql";
import { OdinLessonContainer } from "./OdinLesson";

export const dynamic = "force-dynamic";

export default async function OdinLessonPage({ params }: { params: { lesson: string[] } }) {
  const id = params.lesson.join("/");

  console.log(params);

  const preloadedQuery = await loadSerializableQuery<OdinLessonQuery>(OdinLessonQueryNode, {
    id,
  });

  return <OdinLessonContainer preloadedQuery={preloadedQuery} />;
}
