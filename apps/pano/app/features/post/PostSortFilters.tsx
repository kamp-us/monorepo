import { GappedBox, SmallLink } from "@kampus/ui";
import { useLocation } from "@remix-run/react";
import { Fragment } from "react";

const filters = [
  { url: "/", text: "hepsi" },
  { url: "/posts/active", text: "en günceller" },
  { url: "/posts/hot", text: "en fazla yorum almışlar" },
  { url: "/posts/liked", text: "beğenilenler" },
];

export const PostSortFilters = () => {
  const location = useLocation();
  const paintIfActive = (url: string) =>
    location.pathname === url ? "$amber11" : "none";

  return (
    <GappedBox
      css={{
        alignItems: "center",
        color: "$gray9",
        flexWrap: "wrap",
      }}
    >
      {filters.map(({ url, text }, index) => {
        return (
          <Fragment key={url}>
            <SmallLink
              to={url}
              css={{ color: paintIfActive(url), whiteSpace: "nowrap" }}
            >
              {text}
            </SmallLink>
            {`${index === filters.length - 1 ? "" : " • "}`}
          </Fragment>
        );
      })}
    </GappedBox>
  );
};
