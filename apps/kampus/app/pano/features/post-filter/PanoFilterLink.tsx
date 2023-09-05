import Link from "next/link";

import { Button } from "~/../../packages/ui";
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
    <Button variant="ghost" asChild>
      <Link
        href={"/?" + createQueryString("filter", filter)}
        style={{ fontWeight: isActive ? "bold" : "normal" }}
      >
        {children}
      </Link>
    </Button>
  );
}
