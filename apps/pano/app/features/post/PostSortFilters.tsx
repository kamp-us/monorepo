import { GappedBox, SmallLink } from "@kampus/ui";
import { useLocation } from "@remix-run/react";

const filters = [
  { url: "/", text: "hepsi" },
  { url: "/posts/active", text: "en günceller" },
  { url: "/posts/hot", text: "en fazla yorum almışlar" },
  { url: "/posts/liked", text: "en beğenilenler" },
  { url: "/posts/my-posts", text: "başlıklarım" },
];

export const PostSortFilters = () => {
  const location = useLocation();
  const paintIfActive = (url: string) => (location.pathname === url ? "$amber11" : "none");

  return (
    <GappedBox>
      {filters.map(({ url, text }) => {
        return (
          <SmallLink key={url} to={url} css={{ color: paintIfActive(url) }}>
            {text}
          </SmallLink>
        );
      })}
    </GappedBox>
  );
};
