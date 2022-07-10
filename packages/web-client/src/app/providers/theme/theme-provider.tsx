import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import React from "react";

import { THEMES, useThemeName } from "@/entities/theme";

import { Props } from "../types";

export const ThemeProvider = ({ children }: Props) => {
  const themeName = useThemeName();

  const currentTheme = THEMES[themeName];

  return (
    <EmotionThemeProvider theme={currentTheme}>{children}</EmotionThemeProvider>
  );
};
