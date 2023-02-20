import { AboutPage, MainPage, NotFoundPage } from "pages";
import { RouteObject } from "react-router-dom";
import { RoutePath } from "./routeConfig";

export const routes: RouteObject[] = [
  {
    path: RoutePath.main,
    element: <MainPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: RoutePath.about,
    element: <AboutPage />,
    errorElement: <NotFoundPage />,
  },
];
