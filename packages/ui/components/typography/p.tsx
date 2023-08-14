import { PropsWithChildren } from "react";

export function TypographyP(props: PropsWithChildren) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{props.children}</p>;
}
