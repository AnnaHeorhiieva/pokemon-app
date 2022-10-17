import React from "react";
import { Dispatch } from "redux";
import { useAppSelector } from "store/reduxHooks";

import { useInfiniteScroll } from "hooks/useInfiniteScroll";
import { addIndexToString } from "utils/helpers/addIndexToString";
import { getInfiniteScrollParamsByMode } from "utils/helpers/getInfiniteScrollParamsByMode";
import {
  mainPageModeSelector,
  nextPokemonsPageSelector,
  pokemonsListSelector,
  pokemonsLoadingSelector,
} from "store/pokemons/selectors";
import {
  AllPokemonsActions,
  AllPokemonsSuccessActionCreator,
  AllSortedPokemonsSuccessActionCreator,
  AllSortedPokemonsActions,
} from "store/pokemons/types";

import Container from "@mui/material/Container";
import Spinner from "components/shared/spinner/Spinner";
import PokemonCard from "../pokemon-card/PokemonCard";

import "./PokemonsList.scss";

type PokemonsThunk = (dispatch: Dispatch<AllPokemonsActions>) => Promise<void>;

type SortedPokemonsThunk = (
  dispatch: Dispatch<AllSortedPokemonsActions>,
) => Promise<void>;

type SuccessAction =
  | AllPokemonsSuccessActionCreator
  | AllSortedPokemonsSuccessActionCreator;

type InfiniteScrollPokemonsThunk = PokemonsThunk | SortedPokemonsThunk;

type InfiniteScrollActionCreator = (
  endpoint: string,
  successAction: SuccessAction,
) => InfiniteScrollPokemonsThunk;

type ArgsTuple = [string, number, string];

const ITEMS_PER_PAGE = 15;

function PokemonsList() {
  const pokemonsList = useAppSelector(pokemonsListSelector);
  const pokemonsLoading = useAppSelector(pokemonsLoadingSelector);
  const mainPageMode = useAppSelector(mainPageModeSelector);

  const urlForNextRequest = useAppSelector(nextPokemonsPageSelector);
  const args = [mainPageMode, ITEMS_PER_PAGE, urlForNextRequest] as ArgsTuple;
  const { apiUrls, updaters } = getInfiniteScrollParamsByMode(...args);

  const renderPokemonCards = pokemonsList?.map((pokemon, index) => {
    const { name, types } = pokemon;
    const type = types[0].type.name;
    const key = addIndexToString(name, index);
    return <PokemonCard key={key} pokemonName={name} pokemonType={type} />;
  });

  const observedElementRef = useInfiniteScroll<
    HTMLDivElement,
    InfiniteScrollActionCreator,
    SuccessAction
  >(apiUrls, updaters);

  return (
    <>
      <Container className="pokemons-list-container">
        {renderPokemonCards}
      </Container>
      {renderPokemonCards.length > 0 && (
        <Container className="observed-element" ref={observedElementRef}>
          {pokemonsLoading && <Spinner className="observed-element-spinner" />}
        </Container>
      )}
    </>
  );
}

export default PokemonsList;
