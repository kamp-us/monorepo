import type { FC, PropsWithChildren } from "react";
import { createContext, useContext } from "react";

interface Config {
  isDevelopment: boolean;
  gaTrackingID?: string;
  baseUrl: string;
}

export const ConfigContext = createContext<Config | null>(null);

export const useConfigContext = (): Config => {
  const config = useContext(ConfigContext);
  if (!config) {
    throw new Error("Config context is not available");
  }
  return config;
};

type Props = PropsWithChildren<{ config: Config | null }>;

export const ConfigContextManager: FC<Props> = ({ config, children }) => {
  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
};
