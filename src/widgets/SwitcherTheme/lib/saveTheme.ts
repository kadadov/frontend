import { LOCAL_STORAGE_THEME_KEY } from "widgets/SwitcherTheme/contants/contants";
import { Theme } from "../types/types";

export const saveTheme = (theme: Theme): void => {
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
};
