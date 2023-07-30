"use client";

import { redirect, useSearchParams } from "next/navigation";

import { ThemeToggle } from "@kampus/ui-next";

import { PanoFilterLink } from "~/app/pano/features/PostFilter/PanoFilterLink";
import {
  DEFAULT_FILTER_PATH,
  filters,
  isPanoPostSortFilter,
} from "~/app/pano/features/PostFilter/utils";

export const PostSortFilters = () => {
  const searchParams = useSearchParams();
  const filterQuery = searchParams.get("filter");

  if (!isPanoPostSortFilter(filterQuery)) {
    redirect(DEFAULT_FILTER_PATH);
  }

  return (
    <div className="flex items-center space-x-2">
      {Object.entries(filters).map(([query, label]) => (
        <PanoFilterLink key={query} query={query} activeQuery={filterQuery}>
          {label}
        </PanoFilterLink>
      ))}
      <ThemeToggle />
    </div>
  );
};
