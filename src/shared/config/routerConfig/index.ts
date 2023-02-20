enum AppRouters {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutePath: Record<AppRouters, string> = {
  [AppRouters.MAIN]: "/",
  [AppRouters.ABOUT]: "/about",
};
