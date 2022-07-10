import { Themes, ThemeName } from "../types";

export const THEMES: Themes = {
  light: {
    body: "#F7F9F9",
    error: "#D51923",
    success: "#278200",
    warning: "#F5A600",
    text: {
      primary: "#424242",
      secondary: "#666666",
      tertiary: "#8f8f8f",
    },
  },
  // TODO: create the dark theme
  dark: {
    body: "#F7F9F9",
    error: "#D51923",
    success: "#278200",
    warning: "#F5A600",
    text: {
      primary: "#424242",
      secondary: "#666666",
      tertiary: "#8f8f8f",
    },
  },
};

export const DEFAULT_THEME: ThemeName = "light";
