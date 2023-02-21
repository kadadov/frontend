import { LOCAL_STORAGE_THEME_KEY } from '../contants'
import { type Theme } from '../types/types'

export const loadTheme = (): Theme => {
  return localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme
}
