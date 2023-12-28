"use client";

import { PanoFilterLink } from "~/app/pano/features/post-filter/PanoFilterLink";
import { filters, type PanoPostFilterType } from "~/app/pano/features/post-filter/utils";

interface Props {
  selected: PanoPostFilterType;
}

export const PostSortFilters = (props: Props) => {
  return (
    <div className="flex items-center space-x-2">
      {Object.entries(filters).map(([filter, label]) => (
        <PanoFilterLink
          key={filter}
          filter={filter as PanoPostFilterType}
          isActive={filter === props.selected}
        >
          {label}
        </PanoFilterLink>
      ))}
    </div>
  );
};
