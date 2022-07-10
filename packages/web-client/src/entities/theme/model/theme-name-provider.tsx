import React from "react";

import { DEFAULT_THEME } from "../config";
import { ProviderProps } from "../types";

import { ThemeNameProvider, SetThemeNameProvider } from "./context";

export const Provider = ({ children }: ProviderProps) => {
  const [themeName, setThemeName] = React.useState(DEFAULT_THEME);

  return (
    <SetThemeNameProvider value={setThemeName}>
      <ThemeNameProvider value={themeName}>{children}</ThemeNameProvider>
    </SetThemeNameProvider>
  );
};
