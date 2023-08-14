import { PropsWithChildren } from "react";

export function TypographyLarge(props: PropsWithChildren) {
  return <div className="text-lg font-semibold">{props.children}</div>;
}
