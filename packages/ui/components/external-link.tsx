import React from "react";

import { cn } from "../utils";

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
}

export const ExternalLink = ({ className, children, ...props }: ExternalLinkProps) => {
  return (
    <a
      className={cn("font-bold text-gray-700 hover:no-underline", className)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};
