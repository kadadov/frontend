import { lazy } from "react";

import { delay } from "shared/lib/delay";

export const AboutPageAsync = lazy(
  async () => await delay().then(async () => await import("./AboutPage"))
);
