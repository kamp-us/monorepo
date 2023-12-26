"use client";

import { type PropsWithChildren } from "react";
import { RelayEnvironmentProvider as ReactRelayEnvironmentProvider } from "react-relay";

import { getCurrentEnvironment } from "./environment";

export const RelayEnvironmentProvider = ({ children }: PropsWithChildren) => {
  const environment = getCurrentEnvironment();

  return (
    <ReactRelayEnvironmentProvider environment={environment}>
      {children}
    </ReactRelayEnvironmentProvider>
  );
};
