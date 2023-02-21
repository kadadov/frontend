import { Suspense } from "react";
import { Loader } from "shared/ui/Loader";
import { Navigate } from "widgets/Navigate";
import { SwitcherLanguage } from "widgets/SwitcherLanguage";
import { SwitcherTheme } from "widgets/SwitcherTheme";
import { MainPageAsync } from "./MainPage.async";

export const MainPageContainer = () => {
  return (
    <>
      <Navigate />
      <SwitcherTheme />
      <SwitcherLanguage />
      <Suspense fallback={<Loader />}>
        <MainPageAsync />
      </Suspense>
    </>
  );
};
