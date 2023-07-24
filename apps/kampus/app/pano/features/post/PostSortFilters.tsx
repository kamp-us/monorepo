"use client";

import { usePathname } from "next/navigation";

import { PanoLink } from "~/app/pano/features/link/PanoLink";

export const PostSortFilters = () => {
  const pathname = usePathname();
  const paintIfActive = (url: string) => (pathname === url ? "$amber11" : "none");

  return (
    <div className={"flex space-x-2"}>
      <PanoLink href={"/"}>hepsi</PanoLink>
      <PanoLink href={"/posts/active"}>en günceller</PanoLink>
      <PanoLink href={"/posts/hot"}>en fazla yorum almışlar</PanoLink>
      <PanoLink href={"/posts/liked"}>en begenilenler</PanoLink>
      <PanoLink href={"/posts/my-posts"}>başlıklarım</PanoLink>
    </div>
  );
};
