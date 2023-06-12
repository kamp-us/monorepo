"use client";

import { Search } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";

type ControlGroupProps = {
  placeholder: string;
  icon?: React.ReactNode;
};

export const InputWithButton = ({ placeholder, icon = <Search /> }: ControlGroupProps) => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder={placeholder} />
      <Button type="submit">{icon}</Button>
    </div>
  );
};
