import { ThemeToggle } from "~/../../packages/ui";
import { PostSortFilters } from "../features/PostFilter/PostSortFilters";
import { PostList } from "../features/PostList";

type Post = {
  __typename?: "PanoPost";
  content: string;
  createdAt: string;
  id: string;
  owner: string;
  title: string;
  url: string;
};

export default function PostsPage() {
  const posts: Post[] = [
    {
      __typename: "PanoPost",
      content: "Muthis",
      createdAt: "1 ay once",
      id: "1",
      owner: "Can",
      title: "Can'in muthis postu",
      url: "/wow.sh",
    },
    {
      __typename: "PanoPost",
      content: "Yuppi",
      createdAt: "1 hafta once",
      id: "2",
      owner: "Vladik",
      title: "Vladik'in muthis postu",
      url: "/wow.sh",
    },
  ];

  return (
    <div className="flex flex-col">
      <ThemeToggle />
      <div className="flex">
        <PostSortFilters />
      </div>
      <div>
        <PostList posts={posts} />
      </div>
    </div>
  );
}
