import type { FC } from "react";
import { useEffect } from "react";
import { styled } from "~/stitches.config";
import type { SkipToTarget } from "../context";
import { useSkipToContext } from "../context";

type Props = SkipToTarget & {
  type?: "section" | "nav" | "main";
};

const Landmark = styled("section", {});

export const SkipToLandmark: FC<Props> = ({
  children,
  id,
  label,
  type = "section",
}) => {
  const { actions } = useSkipToContext();

  useEffect(() => {
    actions.add(id, label);
    return () => {
      actions.remove(id);
    };
  }, [actions, id, label]);

  return (
    <Landmark id={id} as={type} tabIndex={0}>
      {children}
    </Landmark>
  );
};
