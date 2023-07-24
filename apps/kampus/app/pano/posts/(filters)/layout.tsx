import { PostSortFilters } from "~/app/pano/features/post/PostSortFilters";

export default function FiltersLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <PostSortFilters />
      {children}
    </section>
  );
}
