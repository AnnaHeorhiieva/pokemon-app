import React from "react";
import { Routes as RoutesWrapper, Route } from "react-router-dom";

import Spinner from "components/shared/spinner/Spinner";
import MainPage from "pages/main-page/MainPage";

const LazyDetailsPage = React.lazy(
  () => import("pages/details-page/DetailsPage"),
);

function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/" element={<MainPage />} />
      <Route
        path="/:pokemonName"
        element={
          <React.Suspense fallback={<Spinner />}>
            <LazyDetailsPage />
          </React.Suspense>
        }
      />
    </RoutesWrapper>
  );
}

export default Routes;
