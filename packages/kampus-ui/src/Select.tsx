import { CaretSortIcon } from "@radix-ui/react-icons";
import { forwardRef } from "react";
import type { CSS } from "~/stitches.config";
import { styled } from "~/stitches.config";

const SelectWrapper = styled("div", {
  backgroundColor: "$loContrast",
  borderRadius: "$2",
  boxShadow: "inset 0 0 0 1px $colors$slate7",
  color: "$hiContrast",
  fontFamily: "$untitled",
  fontSize: "$1",
  fontVariantNumeric: "tabular-nums",
  fontWeight: 400,
  flexShrink: 0,

  "&:focus-within": {
    zIndex: 1,
    boxShadow:
      "inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8",
  },
});

const StyledSelect = styled("select", {
  appearance: "none",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "inherit",
  color: "inherit",
  font: "inherit",
  outline: "none",
  width: "100%",
  height: "100%",
  pl: "$1",
  pr: "$3",
  lineHeight: "25px",

  variants: {
    size: {
      "1": {
        borderRadius: "$1",
        height: "$5",
        px: "$2",
        fontSize: "$1",
        lineHeight: "$sizes$5",
      },
      "2": {
        borderRadius: "$2",
        height: "$6",
        px: "$3",
        fontSize: "$3",
        lineHeight: "$sizes$6",
      },
      "3": {
        borderRadius: "$2",
        height: "$7",
        px: "$4",
        fontSize: "$4",
        lineHeight: "$sizes$7",
      },
    },
  },

  defaultVariants: {
    size: "1",
  },
});

const StyledCaretSortIcon = styled(CaretSortIcon, {
  position: "absolute",
  pointerEvents: "none",
  display: "inline",

  // Use margins instead of top/left to avoid setting "position: relative" on parent,
  // which would make stacking context tricky with Select used in a control group.
  variants: {
    size: {
      "1": {
        marginTop: 5,
        marginLeft: -16,
      },
      "2": {
        marginTop: 10,
        marginLeft: -18,
      },
      "3": {
        marginTop: 5,
        marginLeft: -16,
      },
    },
  },
  defaultVariants: {
    size: "1",
  },
});

type SelectProps = React.ComponentProps<typeof StyledSelect> & { css?: CSS };

export const Select = forwardRef<
  React.ElementRef<typeof StyledSelect>,
  SelectProps
>(({ css, size, ...props }, forwardedRef) => (
  <SelectWrapper css={css}>
    <StyledSelect ref={forwardedRef} size={size} {...props} />
    <StyledCaretSortIcon size={size} />
  </SelectWrapper>
));

Select.toString = () => `.${SelectWrapper.className}`;

Select.displayName = "Select";
