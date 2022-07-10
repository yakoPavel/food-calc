import React from "react";

import { ThemeNameProvider } from "@/entities/theme";

import { ThemeProvider } from "./theme";
import { Props } from "./types";

export const AppProviders = ({ children }: Props) => {
  return (
    <ThemeNameProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ThemeNameProvider>
  );
};
