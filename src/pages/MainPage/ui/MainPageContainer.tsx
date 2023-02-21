import { Suspense } from "react";
import { Loader } from "shared/ui/Loader";
import { Navigate } from "widgets/Navigate";
import { MainPageAsync } from "./MainPage.async";

export const MainPageContainer = () => {
  return (
    <>
      <Navigate />
      <Suspense fallback={<Loader />}>
        <MainPageAsync />
      </Suspense>
    </>
  );
};
