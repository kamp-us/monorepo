import { CenteredContainer } from "@kampus/ui";
import { Outlet } from "@remix-run/react";
import { PostSortFilters } from "~/features/post/PostSortFilters";

export const FiltersLayout = () => {
  return (
    <CenteredContainer css={{ mt: 20, gap: 20 }}>
      <PostSortFilters />
      <Outlet />
    </CenteredContainer>
  );
};

export default FiltersLayout;
