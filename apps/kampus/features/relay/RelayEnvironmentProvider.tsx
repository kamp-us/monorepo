"use client";

import { getCurrentEnvironment } from "@kampus/relay";
import { type PropsWithChildren } from "react";
import { RelayEnvironmentProvider as ReactRelayEnvironmentProvider } from "react-relay";

export const RelayEnvironmentProvider = ({ children }: PropsWithChildren) => {
  const environment = getCurrentEnvironment();

  return (
    <ReactRelayEnvironmentProvider environment={environment}>
      {children}
    </ReactRelayEnvironmentProvider>
  );
};
