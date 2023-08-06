export type PanoPostFilterType = "all" | "active" | "hot" | "liked" | "my-posts";

export const filters: Record<PanoPostFilterType, string> = {
  all: "hepsi",
  active: "en son yorumlananlar",
  hot: "en fazla yorum almışlar",
  liked: "beğendiklerim",
  "my-posts": "başlıklarım",
};

export const DEFAULT_FILTER_PATH = "/posts?filter=all";
export const isPanoPostSortFilter = (x: unknown): x is PanoPostFilterType =>
  Object.keys(filters).some((filter) => filter === x);
