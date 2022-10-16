import React from "react";
import { Dispatch } from "redux";
import { useAppSelector } from "store/reduxHooks";

import { PokemonsActions, SuccessActionCreator } from "store/pokemons/types";
import { addIndexToString } from "utils/helpers/addIndexToString";

import { configureInitialRequestUrl } from "utils/helpers/configureInitialRequestUrl";
import { fetchPokemons as actionCreator } from "store/pokemons/thunks";
import {
  fetchPokemonsInitialFulfilled as initialUpdater,
  fetchPokemonsOnScrollFulfilled as onScrollUpdater,
} from "store/pokemons/actionCreators";
import {
  pokemonsListSelector,
  nextPokemonsPageSelector,
  pokemonsLoadingSelector,
} from "store/pokemons/selectors";
import { useInfiniteScroll } from "hooks/useInfiniteScroll";

import Container from "@mui/material/Container";
import Spinner from "components/shared/spinner/Spinner";
import PokemonCard from "./pokemon-card/PokemonCard";

import "./MainPageContentSection.scss";

type PokemonsThunk = (dispatch: Dispatch<PokemonsActions>) => Promise<void>;

type InfiniteScrollActionCreator = (
  endpoint: string,
  successAction: SuccessActionCreator,
) => PokemonsThunk;

const POKEMONS_PER_PAGE = 15;

function MainPageContentSection() {
  const pokemonsList = useAppSelector(pokemonsListSelector);
  const pokemonsLoading = useAppSelector(pokemonsLoadingSelector);

  const urlForInitialRequest = configureInitialRequestUrl(POKEMONS_PER_PAGE);
  const urlForNextRequest = useAppSelector(nextPokemonsPageSelector);
  const urls = { urlForInitialRequest, urlForNextRequest };
  const updaters = { actionCreator, initialUpdater, onScrollUpdater };

  const observedElementRef = useInfiniteScroll<
    HTMLDivElement,
    InfiniteScrollActionCreator,
    SuccessActionCreator
  >(urls, updaters);

  const renderPokemonCards = pokemonsList?.map((pokemon, index) => {
    const { name } = pokemon;
    const key = addIndexToString(name, index);
    return <PokemonCard key={key} pokemonName={name} />;
  });

  return (
    <Container className="main-page-content-section">
      <Container className="main-page-content">{renderPokemonCards}</Container>
      {renderPokemonCards.length > 0 && (
        <Container className="observed-element" ref={observedElementRef}>
          {pokemonsLoading && <Spinner className="observed-element-spinner" />}
        </Container>
      )}
    </Container>
  );
}

export default MainPageContentSection;
