import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../utils";

const textVariants = cva("text-gray-900 dark:text-gray-100", {
  variants: {
    size: {
      1: "text-[12px]",
      2: "text-[13px]",
      3: "text-[14px]",
      4: "text-[15px]",
      5: "text-[16px]",
    },
    lineHeight: {
      1: "leading-3",
      2: "leading-5",
      3: "leading-6",
    },
  },
  defaultVariants: {
    size: 1,
    lineHeight: 1,
  },
});

export interface TextProps extends React.ComponentProps<"p">, VariantProps<typeof textVariants> {
  children?: React.ReactNode;
}

export const Text = ({ className, children, lineHeight, size, ...props }: TextProps) => {
  return (
    <p className={cn(textVariants({ lineHeight, size, className }))} {...props}>
      {children}
    </p>
  );
};

Text.displayName = "Text";
