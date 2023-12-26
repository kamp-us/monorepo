import loadSerializableQuery from "~/features/relay/load-serializable-query";
import query, {
  type SinglePostContainerQuery,
} from "../../__generated__/SinglePostContainerQuery.graphql";
import { SinglePostContainer } from "../../SinglePostContainer";

export default async function PostsPage({ params }: { params: { id: string } }) {
  const preloadedQuery = await loadSerializableQuery<SinglePostContainerQuery>(query, {
    id: decodeURIComponent(params.id),
  });

  return (
    <div className="flex flex-col gap-4">
      <SinglePostContainer preloadedQuery={preloadedQuery} />
    </div>
  );
}
