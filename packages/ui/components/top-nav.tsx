import { type PropsWithChildren } from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "../utils";

export const TopNav = ({ children, sticky }: PropsWithChildren<{ sticky?: boolean }>) => {
  return (
    <header className={cn(!!sticky && "sticky", "top-0 z-40 w-full border-b bg-background")}>
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex flex-1 gap-6 md:gap-10">{children}</div>
      </div>
    </header>
  );
};

export const TopNavBrand = ({ children, asChild }: PropsWithChildren<{ asChild?: boolean }>) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp className="flex items-center space-x-2">
      <span className="inline-block font-bold">{children}</span>
    </Comp>
  );
};

export const TopNavItem = ({ children, asChild }: PropsWithChildren<{ asChild?: boolean }>) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp className={"flex items-center text-sm font-medium text-muted-foreground"}>
      {children}
    </Comp>
  );
};
