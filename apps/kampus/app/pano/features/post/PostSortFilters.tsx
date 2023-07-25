"use client";

import { redirect, useSearchParams } from "next/navigation";

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

export const PostSortFilters = () => {
  const searchParams = useSearchParams();
  const filterQuery = searchParams.get("filter");

  if (!isPanoPostSortFilter(filterQuery)) {
    redirect(DEFAULT_FILTER_PATH);
  }

  return (
    <div className={"flex space-x-2"}>
      {filters.map((f) => (
        <PanoFilterLink key={f.query} query={f.query} activeQuery={filterQuery}>
          {f.label}
        </PanoFilterLink>
      ))}
    </div>
  );
};
