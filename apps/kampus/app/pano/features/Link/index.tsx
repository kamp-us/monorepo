import Link from "next/link";

import { cn } from "~/../../packages/ui/utils";

type PanoLinkTypes = "external" | "internal";

interface PanoLinkProps {
  href: string;
  title: string;
  variant?: PanoLinkTypes;
  className?: string;
}

export const PanoLink = ({ href, title, variant = "internal", className }: PanoLinkProps) => {
  // TODO: Differentiate between internal and external links with css
  if (variant === "external") {
    return (
      <a className={cn("text-primary", className)} href={href}>
        {title}
      </a>
    );
  }

  return (
    <Link className={cn("text-muted-foreground hover:underline", className)} href={href}>
      {title}
    </Link>
  );
};
