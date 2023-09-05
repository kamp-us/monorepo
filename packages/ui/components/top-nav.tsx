import { type PropsWithChildren } from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "../utils";

export const TopNav = ({ children, sticky }: PropsWithChildren<{ sticky?: boolean }>) => {
  return (
    <header className={cn(!!sticky && "sticky", "bg-background top-0 z-40 h-16 w-full border-b")}>
      <div className="flex h-full w-full">{children}</div>
    </header>
  );
};

export const TopNavBrand = ({
  className,
  children,
  asChild,
}: PropsWithChildren<{ asChild?: boolean; className?: string }>) => {
  const Comp = asChild ? Slot : "a";

  return <Comp className={cn(className, "flex items-center font-bold")}>{children}</Comp>;
};

export const TopNavItem = ({ children, asChild }: PropsWithChildren<{ asChild?: boolean }>) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={
        "text-muted-foreground hover:text-foreground flex items-center px-4 text-sm font-medium"
      }
    >
      {children}
    </Comp>
  );
};
