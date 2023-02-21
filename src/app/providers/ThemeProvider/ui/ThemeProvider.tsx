import { type FC, useMemo, useState, type PropsWithChildren } from 'react'
import { INITIAL_THEME } from 'widgets/SwitcherTheme/contants'
import { ThemeContext } from 'widgets/SwitcherTheme/context/ThemeContext'
import { type Theme } from 'widgets/SwitcherTheme/types/types'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(INITIAL_THEME)

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  )

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
