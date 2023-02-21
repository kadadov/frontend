import { lazy } from "react";
import { delay } from "shared/lib/delay";

export const MainPageAsync = lazy(
  async () => await delay().then(async () => await import("./MainPage"))
);
