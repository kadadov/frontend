import { useContext } from 'react'
import { saveTheme } from 'widgets/SwitcherTheme/lib/saveTheme'
import { ThemeContext } from '../context/ThemeContext'
import { Theme } from '../types/types'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const themeNew = Theme.LIGHT === theme ? Theme.DARK : Theme.LIGHT

    setTheme(themeNew)
    saveTheme(themeNew)
  }

  return {
    theme,
    toggleTheme
  }
}
