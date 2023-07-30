"use client";

import { useRouter } from "next/navigation";

import { Button } from "@kampus/ui-next";

export interface ProviderButtonProps {
  name: string;
  connected: boolean;
}

// CONTINUE HERE TODO adjust link / unlink components
export const ProviderButton = ({ name, connected }: ProviderButtonProps) => {
  const { push } = useRouter();

  return (
    <form>
      <Button variant="outline" type="submit">
        {!connected ? "Connect to " : "Disconnect from "}
        {name}
      </Button>
    </form>
  );
};
