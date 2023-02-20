import { RouterProvider as AppRouterProvider } from "react-router-dom";
import { router } from "../config/router";

export const RouterProvider = () => {
  return <AppRouterProvider router={router} />;
};
