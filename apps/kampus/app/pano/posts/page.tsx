"use client";

import { redirect, useSearchParams } from "next/navigation";

import {
  DEFAULT_FILTER_PATH,
  isPanoPostSortFilter,
  PostSortFilters,
} from "~/app/pano/features/post/PostSortFilters";

export default function PostsPage() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  if (!isPanoPostSortFilter(filter)) {
    redirect(DEFAULT_FILTER_PATH);
  }

  const posts = [
    { id: 1, title: "Post1" },
    { id: 2, title: "Post2" },
    { id: 3, title: "Post3" },
  ];

  return (
    <div>
      <PostSortFilters activeFilter={filter} />
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <a href={`/pano/post/${post.id}`}>{post.title}</a>
          </div>
        );
      })}
    </div>
  );
}
