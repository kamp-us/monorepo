"use client";

import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

// This *client* component will be imported into a blog layout
export function PanoLink({ href, children }: { href: string; children: React.ReactNode }) {
  // Navigating to `/blog/hello-world` will return 'hello-world'
  // for the selected layout segment
  const segment = useSelectedLayoutSegment();
  const isActive = segment ? href.includes(segment) : false;
  console.log("segment", segment);
  console.log("isActive", isActive, href);

  return (
    <Link
      href={`/pano${href}`}
      // Change style depending on whether the link is active
      style={{ fontWeight: isActive ? "bold" : "normal" }}
    >
      {children}
    </Link>
  );
}
