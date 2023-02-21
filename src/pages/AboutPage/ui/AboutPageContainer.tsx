import { Suspense } from "react";
import { Loader } from "shared/ui/Loader";
import { Navigate } from "widgets/Navigate";
import { AboutPageAsync } from "./AboutPage.async";

export const AboutPageContainer = () => {
  return (
    <>
      <Navigate />
      <Suspense fallback={<Loader />}>
        <AboutPageAsync />
      </Suspense>
    </>
  );
};
