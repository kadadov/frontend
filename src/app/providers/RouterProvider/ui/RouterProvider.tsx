import { type FC } from 'react'
import { RouterProvider as AppRouterProvider } from 'react-router-dom'

import { router } from '../config/router'

export const RouterProvider: FC = () => {
  return <AppRouterProvider router={router} />
}
