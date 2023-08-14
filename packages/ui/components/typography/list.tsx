import { PropsWithChildren } from "react";

export function TypographyList(props: PropsWithChildren) {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{props.children}</ul>;
}
