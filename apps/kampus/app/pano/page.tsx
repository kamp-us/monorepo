import loadSerializableQuery from "@kampus/relay/load-serializable-query";

import { PostSortFilters } from "~/app/pano/features/post-filter/PostSortFilters";
import query, { type PostListContainerQuery } from "./__generated__/PostListContainerQuery.graphql";
import { PostListContainer } from "./PostListContainer";

export default async function PostsPage() {
  const preloadedQuery = await loadSerializableQuery<PostListContainerQuery>(query, {});

  return (
    <div className="flex flex-col gap-4">
      <PostSortFilters />
      <PostListContainer preloadedQuery={preloadedQuery} />
    </div>
  );
}
