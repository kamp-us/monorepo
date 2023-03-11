import { GappedBox, SmallLink } from "@kampus/ui";
import { useLocation } from "@remix-run/react";
import { PopularPostsTimeframeFilters } from "./PopularPostsTimeframeFilters";

const filters = [
  { url: "/", text: "hepsi" },
  { url: "/posts/active", text: "en günceller" },
  { url: "/posts/hot", text: "en fazla yorum almışlar" },
  { url: "/posts/liked", text: "en beğenilenler" },
  { url: "/posts/my-posts", text: "başlıklarım" },
];

export const PostSortFilters = () => {
  const location = useLocation();

  const isUrlActive = (url: string) => location.pathname === url;
  const paintIfActive = (url: string) =>
    isUrlActive(url) ? "$amber11" : "none";

  return (
    <GappedBox
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {filters.map(({ url, text }) => {
        if (isUrlActive(url) && url === "/posts/hot") {
          return (
            <GappedBox
              key={url}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <SmallLink to={url} css={{ color: paintIfActive(url) }}>
                {text}
              </SmallLink>
              <PopularPostsTimeframeFilters />
            </GappedBox>
          );
        }

        return (
          <SmallLink key={url} to={url} css={{ color: paintIfActive(url) }}>
            {text}
          </SmallLink>
        );
      })}
    </GappedBox>
  );
};
