import { PanoFilterLink } from "~/app/pano/features/post/PanoFilterLink";

const filters = [
  { query: "all", label: "hepsi" },
  { query: "active", label: "en günceller" },
  { query: "hot", label: "en fazla yorum almışlar" },
  { query: "liked", label: "en begenilenler" },
  { query: "my-posts", label: "başlıklarım" },
] as const;

export const DEFAULT_FILTER_PATH = "/pano/posts?filter=all";

export type PanoPostFilterType = (typeof filters)[number]["query"];
export const isPanoPostSortFilter = (x: any): x is PanoPostFilterType =>
  filters.some((filter) => filter.query === x);

type PostSortFiltersProps = {
  activeFilter: PanoPostFilterType;
};

export const PostSortFilters = (props: PostSortFiltersProps) => {
  return (
    <div className={"flex space-x-2"}>
      {filters.map((filter) => (
        <PanoFilterLink key={filter.query} query={filter.query} activeQuery={props.activeFilter}>
          {filter.label}
        </PanoFilterLink>
      ))}
    </div>
  );
};
