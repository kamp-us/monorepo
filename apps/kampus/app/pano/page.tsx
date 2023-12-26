import loadSerializableQuery from "~/features/relay/load-serializable-query";
import { PostSortFilters } from "~/app/pano/features/post-filter/PostSortFilters";
import query, {
  type PanoPostFilter,
  type PostListContainerQuery,
} from "./__generated__/PostListContainerQuery.graphql";
import { type PanoPostFilterType } from "./features/post-filter/utils";
import { PostListContainer } from "./PostListContainer";

const normalizeFilter = (query?: string): PanoPostFilterType | null => {
  if (!query) {
    return null;
  }

  return ["MOST_COMMENTED", "MOST_UPVOTED", "ACTIVE", "OWNED"].includes(query)
    ? (query as PanoPostFilterType)
    : null;
};

export default async function PostsPage({ searchParams }: { searchParams: { filter?: string } }) {
  const normalized = normalizeFilter(searchParams.filter);

  const preloadedQuery = await loadSerializableQuery<PostListContainerQuery>(query, {
    filter: normalized as PanoPostFilter | null,
  });

  return (
    <div className="flex flex-col gap-4">
      <PostSortFilters selected={normalized ?? "ALL"} />
      <PostListContainer preloadedQuery={preloadedQuery} />
    </div>
  );
}
