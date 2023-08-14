import { PropsWithChildren } from "react";

export function TypographyH4(props: PropsWithChildren) {
  return <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{props.children}</h4>;
}
