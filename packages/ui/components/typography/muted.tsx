import { PropsWithChildren } from "react";

export function TypographyMuted(props: PropsWithChildren) {
  return <p className="text-muted-foreground text-sm">{props.children}</p>;
}
