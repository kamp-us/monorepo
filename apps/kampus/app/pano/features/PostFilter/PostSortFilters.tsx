"use client";

import { redirect, useSearchParams } from "next/navigation";

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
    <div className={"flex space-x-2"}>
      {Object.entries(filters).map(([query, label]) => (
        <PanoFilterLink key={query} query={query} activeQuery={filterQuery}>
          {label}
        </PanoFilterLink>
      ))}
    </div>
  );
};
