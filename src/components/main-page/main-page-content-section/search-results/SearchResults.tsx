import React from "react";
import { useAppSelector } from "store/reduxHooks";

import {
  loadSearchErrorSelector,
  searchedPokemonSelector,
  searchedPokemonsLoadingSelector,
} from "store/pokemons/selectors";

import Container from "@mui/material/Container";
import SideEffectsHandler from "components/shared/side-effects-handler/SideEffectsHandler";
import PokemonCard from "../pokemon-card/PokemonCard";

import "./SearchResults.scss";

function SearchResults() {
  const isLoading = useAppSelector(searchedPokemonsLoadingSelector);
  const error = useAppSelector(loadSearchErrorSelector);

  const { name, types } = useAppSelector(searchedPokemonSelector);
  const type = types?.[0].type.name;

  return (
    <SideEffectsHandler loading={isLoading} error={error}>
      <Container className="search-results-container">
        <PokemonCard pokemonName={name} pokemonType={type} />
      </Container>
    </SideEffectsHandler>
  );
}

export default SearchResults;
