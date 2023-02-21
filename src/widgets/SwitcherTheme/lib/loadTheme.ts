import { LOCAL_STORAGE_THEME_KEY } from "../contants";
import { Theme } from "../types/types";

export const loadTheme = (): string => {
  return localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;
};
