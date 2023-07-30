import Link from "next/link";

import { type PanoPostFilterType } from "~/app/pano/features/post-filter/utils";

const createQueryString = (key: string, value: string) => {
  const searchParams = new URLSearchParams();
  searchParams.set(key, value);

  return searchParams.toString();
};

export function PanoFilterLink({
  query,
  children,
  activeQuery,
}: {
  query: string;
  activeQuery: PanoPostFilterType;
  children: React.ReactNode;
}) {
  const isActive = query === activeQuery;

  return (
    <Link
      href={"/pano/posts?" + createQueryString("filter", query)}
      style={{ fontWeight: isActive ? "bold" : "normal" }}
    >
      {children}
    </Link>
  );
}
