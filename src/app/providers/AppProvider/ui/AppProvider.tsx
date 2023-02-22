import { type FC } from "react"

import { RouterProvider } from "app/providers/RouterProvider"
import { ThemeProvider } from "app/providers/ThemeProvider"

export const AppProvider: FC = () => {
  return (
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  )
}
