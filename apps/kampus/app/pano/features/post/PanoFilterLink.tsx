"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function PanoFilterLink({ href, children }: { href: string; children: React.ReactNode }) {
  // pathname is like /pano/posts/active
  const pathname = usePathname();
  // we need to do this if "/" is the href because otherwise the link will be /pano/
  const literalHref = href === "/" ? "" : href;
  // isActive is true if the current pathname is the same as the link's href
  const isActive = pathname === "/pano" + literalHref;

  return (
    <Link href={"/pano" + href} style={{ fontWeight: isActive ? "bold" : "normal" }}>
      {children}
    </Link>
  );
}
