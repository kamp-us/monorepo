import React, { SetStateAction } from "react";
import { GappedBox } from "~/ui-library/GappedBox";
import { Text } from "~/ui-library/Text";

type PostSorterProps = {
  sort: PostSort;
  setSort: React.Dispatch<SetStateAction<PostSort>>;
};

type PostSort = "all" | "active" | "comments";

export const PostSorter = ({ sort, setSort }: PostSorterProps) => {
  return (
    <GappedBox css={{ justifyContent: "center" }}>
      <Text css={{ cursor: "pointer" }} onClick={() => setSort("all")}>
        hepsi -
      </Text>
      <Text css={{ cursor: "pointer" }} onClick={() => setSort("active")}>
        en günceller -
      </Text>
      <Text css={{ cursor: "pointer" }} onClick={() => setSort("comments")}>
        en fazla yorum almışlar
      </Text>
    </GappedBox>
  );
};
