import { Suspense } from "react";
import { Loader } from "shared/ui/Loader";
import { Navigate } from "widgets/Navigate";
import { SwitcherTheme } from "widgets/SwitcherTheme";
import { MainPageAsync } from "./MainPage.async";

export const MainPageContainer = () => {
  return (
    <>
      <Navigate />
      <SwitcherTheme />
      <Suspense fallback={<Loader />}>
        <MainPageAsync />
      </Suspense>
    </>
  );
};
