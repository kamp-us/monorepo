import { redirect } from "next/navigation";

import { DEFAULT_FILTER_PATH } from "~/app/pano/features/filter/utils";

export default function PanoHome() {
  redirect(DEFAULT_FILTER_PATH);
  return <div>Just redirecting</div>;
}
