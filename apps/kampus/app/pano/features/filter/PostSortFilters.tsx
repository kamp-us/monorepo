"use client";

import { redirect, useSearchParams } from "next/navigation";

import { PanoFilterLink } from "~/app/pano/features/filter/PanoFilterLink";
import {
  DEFAULT_FILTER_PATH,
  filters,
  isPanoPostSortFilter,
} from "~/app/pano/features/filter/utils";

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
