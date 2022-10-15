import React from "react";
import { useAppDispatch, useAppSelector } from "store/reduxHooks";

import { pokemonsListSelector } from "store/pokemons/selectors";

import Container from "@mui/material/Container";
import PokemonCard from "./pokemon-card/PokemonCard";

import "./MainPageContentSection.scss";

function MainPageContentSection() {
  const pokemonsList = useAppSelector(pokemonsListSelector);

  const renderPokemonCards = pokemonsList.map((pokemon, index) => (
    <PokemonCard key={pokemon.name} pokemonName={pokemon.name} />
  ));

  return (
    <Container className="main-page-content-section">
      <Container className="main-page-content">{renderPokemonCards}</Container>
    </Container>
  );
}

export default MainPageContentSection;
