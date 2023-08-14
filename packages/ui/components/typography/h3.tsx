import { PropsWithChildren } from "react";

export function TypographyH3(props: PropsWithChildren) {
  return <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{props.children}</h3>;
}
