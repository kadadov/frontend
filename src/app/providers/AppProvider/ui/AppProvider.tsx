import { RouterProvider } from 'app/providers/RouterProvider'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { type FC } from 'react'

export const AppProvider: FC = () => {
  return (
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  )
}
