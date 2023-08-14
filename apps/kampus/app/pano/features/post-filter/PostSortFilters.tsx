"use client";

import { useSearchParams } from "next/navigation";

import { ThemeToggle } from "@kampus/ui";

import { PanoFilterLink } from "~/app/pano/features/post-filter/PanoFilterLink";
import {
  filters,
  isPanoPostSortFilter,
  type PanoPostFilterType,
} from "~/app/pano/features/post-filter/utils";

export const PostSortFilters = () => {
  const searchParams = useSearchParams();
  let filterQuery = searchParams.get("filter") ?? "all";

  if (!isPanoPostSortFilter(filterQuery)) {
    console.log(filterQuery);
    filterQuery = "all";
  }

  return (
    <div className="flex items-center space-x-2">
      {Object.entries(filters).map(([query, label]) => (
        <PanoFilterLink key={query} query={query} activeQuery={filterQuery as PanoPostFilterType}>
          {label}
        </PanoFilterLink>
      ))}
      <ThemeToggle />
    </div>
  );
};
