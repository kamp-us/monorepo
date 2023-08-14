import { PropsWithChildren } from "react";

export function TypographyLead(props: PropsWithChildren) {
  return <p className="text-muted-foreground text-xl">{props.children}</p>;
}
