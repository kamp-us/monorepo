export const filters = {
  ALL: "hepsi",
  ACTIVE: "en son yorumlananlar",
  MOST_COMMENTED: "en cok yorumlananlar",
  MOST_UPVOTED: "en cok oylananlar",
  OWNED: "başlıklarım",
} as const;

export type PanoPostFilterType = keyof typeof filters;

export const isPanoPostSortFilter = (x: unknown): x is PanoPostFilterType =>
  Object.keys(filters).some((filter) => filter === x);
