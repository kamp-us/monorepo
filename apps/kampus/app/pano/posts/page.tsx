import { PostSortFilters } from "~/app/pano/features/post-filter/PostSortFilters";
import { PostList } from "../features/post-list/PostList";

type Post = {
  __typename?: "PanoPost";
  content: string;
  createdAt: string;
  id: string;
  owner: string;
  title: string;
  url: string;
};

const posts: Post[] = [
  {
    __typename: "PanoPost",
    content: "Muthis",
    createdAt: "1 ay once",
    id: "1",
    owner: "Can",
    title: "Can'in muthis postu",
    url: "wow.sh",
  },
  {
    __typename: "PanoPost",
    content: "Yuppi",
    createdAt: "1 hafta once",
    id: "2",
    owner: "Vladik",
    title: "Vladik'in muthis postu",
    url: "https://wow.sh",
  },
];

export default function PostsPage() {
  return (
    <div className="flex flex-col gap-4">
      <PostSortFilters />
      <PostList posts={posts} />
    </div>
  );
}
