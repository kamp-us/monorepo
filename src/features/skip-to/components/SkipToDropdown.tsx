import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";
import type { FC } from "react";
import { styled } from "~/stitches.config";
import { Button } from "~/ui-library";
import { useSkipToContext } from "../context";

const Link = styled("a", {
  color: "$gray11",

  "&:hover": {
    color: "$amber11",
  },
});

const MenuLink = styled(Link, {
  textDecoration: "none",
});

export const SkipToDropdown: FC = () => {
  const { targets } = useSkipToContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          color="transparent"
          css={{ padding: 0, borderRadius: "9999px" }}
        >
          Skip to ...
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={5}>
        {Object.values(targets).map((target) => (
          <MenuLink key={target.id} href={`#${target.id}`}>
            {target.label}
          </MenuLink>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
