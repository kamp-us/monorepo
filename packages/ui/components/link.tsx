import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../utils";

const linkVariants = cva("", {
  variants: {
    variant: {
      default: "text-primary hover:text-amber-700",
      post: "text-primary font-bold hover:no-underline",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string;
}

const RouterLink = ({ className, variant, href, ...props }: LinkProps) => {
  return <Link href={href} className={cn(linkVariants({ variant, className }))} {...props} />;
};

RouterLink.displayName = "Link";

export { RouterLink, linkVariants };
