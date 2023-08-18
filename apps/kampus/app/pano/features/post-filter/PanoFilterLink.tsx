import Link from "next/link";

import { type PanoPostFilterType } from "~/app/pano/features/post-filter/utils";

const createQueryString = (key: string, value: string) => {
  const searchParams = new URLSearchParams();
  searchParams.set(key, value);

  return searchParams.toString();
};

interface Props {
  isActive: boolean;
  filter: PanoPostFilterType;
  children: React.ReactNode;
}

export function PanoFilterLink({ isActive, children, filter }: Props) {
  return (
    <Link
      href={"/?" + createQueryString("filter", filter)}
      style={{ fontWeight: isActive ? "bold" : "normal" }}
    >
      {children}
    </Link>
  );
}
