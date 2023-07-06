import { type PropsWithChildren } from "react";

export const CenteredContainer = (props: PropsWithChildren) => (
  <div className="max-w-900 mx-auto box-border flex flex-col justify-center px-2">
    {props.children}
  </div>
);
