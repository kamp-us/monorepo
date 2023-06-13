"use client";

type InputWithButtonProps = {
  input: React.ReactNode;
  button: React.ReactNode;
};

export const InputWithButton = ({ input, button }: InputWithButtonProps) => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      {input}
      {button}
    </div>
  );
};
