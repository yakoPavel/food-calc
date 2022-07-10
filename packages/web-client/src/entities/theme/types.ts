import React from "react";

type Color = string;

type Theme = {
  body: Color;
  text: {
    primary: Color;
    secondary: Color;
    tertiary: Color;
  };
  success: Color;
  warning: Color;
  error: Color;
};

export type ThemeName = "light" | "dark";

export type SetThemeName = (name: ThemeName) => void;

export type Themes = Record<ThemeName, Theme>;

export type ProviderProps = {
  children: React.ReactNode;
};
