"use client";

import { useEffect, useState } from "react";

interface ValidationMessageProps {
  error: string;
  isSubmitting?: boolean;
}

export const ValidationMessage = (props: ValidationMessageProps) => {
  const { error, isSubmitting } = props;
  const [show, setShow] = useState(!!error);

  useEffect(() => {
    const id = setTimeout(() => {
      const hasError = !!error;
      setShow(hasError && !isSubmitting);
    });
    return () => clearTimeout(id);
  }, [error, isSubmitting]);

  return (
    <div
      className={`opacity-${show ? 100 : 0} text-amber-600 transition-all duration-500 ease-in-out`}
    >
      {error}
    </div>
  );
};
