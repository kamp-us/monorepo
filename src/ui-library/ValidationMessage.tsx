import type { FC } from "react";
import { useEffect, useState } from "react";
import { Box } from "~/ui-library";

type ValidationMessageProps = {
  error: string;
  isSubmitting?: boolean;
};

export const ValidationMessage: FC<ValidationMessageProps> = ({
  error,
  isSubmitting = false,
}) => {
  const [show, setShow] = useState(!!error);

  useEffect(() => {
    const id = setTimeout(() => {
      const hasError = !!error;
      setShow(hasError && !isSubmitting);
    });
    return () => clearTimeout(id);
  }, [error, isSubmitting]);

  return (
    <Box
      css={{
        opacity: show ? 1 : 0,
        color: "$amber11",
        transition: "all 500ms ease-in-out",
      }}
    >
      {error}
    </Box>
  );
};
