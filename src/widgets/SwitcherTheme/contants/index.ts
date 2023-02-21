import { loadTheme } from '../lib/loadTheme'
import { Theme } from '../types/types'

export const LOCAL_STORAGE_THEME_KEY = 'theme'

export const DEFAULT_THEME = Theme.LIGHT
export const INITIAL_THEME = loadTheme() ?? DEFAULT_THEME
