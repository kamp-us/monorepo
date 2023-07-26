export type PanoPostFilterType = "all" | "active" | "hot" | "liked" | "my-posts";

type PanoPostFilter = {
  query: PanoPostFilterType;
  label: string;
};

export const filters: PanoPostFilter[] = [
  { query: "all", label: "hepsi" },
  { query: "active", label: "en son yorumlananlar" },
  { query: "hot", label: "en fazla yorum almışlar" },
  { query: "liked", label: "en beğenilenler" },
  { query: "my-posts", label: "başlıklarım" },
];

export const DEFAULT_FILTER_PATH = "/pano/posts?filter=all";
export const isPanoPostSortFilter = (x: any): x is PanoPostFilterType =>
  filters.some((filter) => filter.query === x);
