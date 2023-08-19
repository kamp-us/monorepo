import loadSerializableQuery from "@kampus/relay/load-serializable-query";

import query, {
  type PostListBySiteContainerQuery,
} from "../[...site]/__generated__/PostListBySiteContainerQuery.graphql";
import { PostListBySiteContainer } from "../[...site]/PostListBySiteContainer";

export default async function PostSitePage({ params }: { params: { site: string[] } }) {
  const preloadedQuery = await loadSerializableQuery<PostListBySiteContainerQuery>(query, {
    site: params.site.join("/"),
  });

  return (
    <div className="flex flex-col gap-4">
      <PostListBySiteContainer preloadedQuery={preloadedQuery} />
    </div>
  );
}
