import { type FC } from "react"

import { BoundaryProvider } from "app/providers/BoundaryProvider"
import { RouterProvider } from "app/providers/RouterProvider"
import { ThemeProvider } from "app/providers/ThemeProvider"

export const AppProvider: FC = () => {
  return (
    <BoundaryProvider>
      <ThemeProvider>
        <RouterProvider />
      </ThemeProvider>
    </BoundaryProvider>
  )
}
