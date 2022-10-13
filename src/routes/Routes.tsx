import React from "react";
import { Routes as RoutesWrapper, Route } from "react-router-dom";

import Spinner from "components/spinner/Spinner";
import MainPage from "pages/main-page/MainPage";

const LazyDetailsPage = React.lazy(
  () => import("pages/pokemon-details-page/PokemonDetailsPage"),
);

function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/" element={<MainPage />} />
      <Route
        // pokemonId if item fetched by id
        path="/:pokemonId"
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
