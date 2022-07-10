import { createContext } from "@/shared/lib/create-context";

import { ThemeName, SetThemeName } from "../types";

export const [useThemeName, ThemeNameProvider] = createContext<ThemeName>();

export const [useSetThemeName, SetThemeNameProvider] =
  createContext<SetThemeName>();
