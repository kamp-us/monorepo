import type React from "react";

export const setFormInput = (
  state: any,
  setState: React.Dispatch<React.SetStateAction<any>>,
  key: string,
  value: any
) => {
  setState({ ...state, [key]: value });
};
