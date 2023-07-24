import { PostSortFilters } from "~/app/pano/features/post/PostSortFilters";
import { Random } from "./random";

export default function PanoHome() {
  return (
    <div>
      <PostSortFilters />
      <Random />
    </div>
  );
}
