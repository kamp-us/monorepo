import NextLink from "next/link";
import { Link } from "@radix-ui/themes";

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
    <NextLink href={"/pano/?" + createQueryString("filter", filter)}>
      <Link
        color={isActive ? undefined : "gray"}
        underline="always"
        weight={isActive ? "bold" : "regular"}
      >
        {children}
      </Link>
    </NextLink>
  );
}
