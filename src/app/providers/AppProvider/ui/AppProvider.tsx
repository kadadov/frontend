import { RouterProvider } from "app/providers/RouterProvider";
import { ThemeProvider } from "app/providers/ThemeProvider";

export const AppProvider = () => {
  return (
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  );
};
