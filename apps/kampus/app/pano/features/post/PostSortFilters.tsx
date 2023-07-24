"use client";

import { PanoFilterLink } from "~/app/pano/features/post/PanoFilterLink";

const links = [
  { href: "/", label: "hepsi" },
  { href: "/posts/active", label: "en günceller" },
  { href: "/posts/hot", label: "en fazla yorum almışlar" },
  { href: "/posts/liked", label: "en begenilenler" },
  { href: "/posts/my-posts", label: "başlıklarım" },
];

export const PostSortFilters = () => {
  return (
    <div className={"flex space-x-2"}>
      {links.map((link) => (
        <PanoFilterLink key={link.href} href={link.href}>
          {link.label}
        </PanoFilterLink>
      ))}
    </div>
  );
};
