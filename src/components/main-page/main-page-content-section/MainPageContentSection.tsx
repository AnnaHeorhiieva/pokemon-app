import React from "react";
import { useAppSelector } from "store/reduxHooks";

import { mainPageModeSelector } from "store/pokemons/selectors";

import Container from "@mui/material/Container";
import PokemonsList from "./pokemons-list/PokemonsList";
import SearchResults from "./search-results/SearchResults";

import "./MainPageContentSection.scss";

const SEARCH = "search";

function MainPageContentSection() {
  const mainPageMode = useAppSelector(mainPageModeSelector);
  const isSearchMode = mainPageMode === SEARCH;

  return (
    <Container className="main-page-content-section">
      {isSearchMode ? <SearchResults /> : <PokemonsList />}
    </Container>
  );
}

export default MainPageContentSection;
