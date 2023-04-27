import React, { createContext, useContext } from "react";
import type { AppAbility } from "./ability";

export const AbilityProvider = ({
  ability,
  children,
}: {
  ability: AppAbility;
  children: React.ReactNode;
}) => {
  return (
    <AbilityContext.Provider value={ability}>
      {children}
    </AbilityContext.Provider>
  );
};

export const useAbility = () => useContext(AbilityContext);
export const AbilityContext = createContext<AppAbility>(
  null as unknown as AppAbility
);
