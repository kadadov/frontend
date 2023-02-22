import { type RouteObject } from 'react-router-dom'

import { AboutPage, MainPage, NotFoundPage } from 'pages'
import { RoutePath } from 'shared/config/routerConfig'

export const routes: RouteObject[] = [
  {
    path: RoutePath.main,
    element: <MainPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: RoutePath.about,
    element: <AboutPage />,
    errorElement: <NotFoundPage />
  }
]
