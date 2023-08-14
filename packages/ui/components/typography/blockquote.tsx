import { PropsWithChildren } from "react";

export function TypographyBlockquote(props: PropsWithChildren) {
  return <blockquote className="mt-6 border-l-2 pl-6 italic">{props.children}</blockquote>;
}
