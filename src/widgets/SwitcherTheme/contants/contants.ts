import { Theme } from "../types/types";

export const LOCAL_STORAGE_THEME_KEY = "theme";

export const DEFAULT_THEME = Theme.LIGHT;
export const INITIAL_THEME =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || DEFAULT_THEME;
