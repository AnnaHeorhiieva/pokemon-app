import axios from "axios";
import { Dispatch } from "redux";

import { NamedAPIResource } from "utils/types/types";
import {
  fetchPokemonsPending,
  fetchPokemonsRejected,
  fetchPokemonRejected,
  fetchPokemonFulfilled,
  fetchSearchedPokemonPending,
  fetchSearchedPokemonFulfilled,
  fetchSearchedPokemonRejected,
  fetchSortedPokemonsPending,
  fetchSortedPokemonsRejected,
  fetchPokemonPending,
  fetchDetailedPokemonsRejected,
} from "./actionCreators";
import {
  AllPokemonsActions,
  PokemonActions,
  AllPokemonsSuccessActionCreator,
  SearchedPokemonActions,
  AllSortedPokemonsSuccessActionCreator,
  AllSortedPokemonsActions,
} from "./types";

async function getDetailedPokemonsArray(results: NamedAPIResource[]) {
  const resultsMapCb = (result: NamedAPIResource) => result.url;
  const detailsUrlsArrayMapCb = (url: string) => axios.get(url);
  const detailedPokemonsMapCb = (result: any) => result.data;
  const detailsUrlsArray = results.map(resultsMapCb);
  const promiseIterable = detailsUrlsArray.map(detailsUrlsArrayMapCb);
  const promiseAllResults = await Promise.all(promiseIterable);
  const detailedPokemonsArray = promiseAllResults.map(detailedPokemonsMapCb);
  return detailedPokemonsArray;
}

export function fetchPokemons(
  endpoint: string,
  successAction: AllPokemonsSuccessActionCreator,
) {
  return async (dispatch: Dispatch<AllPokemonsActions>) => {
    dispatch(fetchPokemonsPending());
    try {
      const { data } = await axios.get(endpoint);
      const { results, next } = data;
      try {
        const detailedPokemonsArray = await getDetailedPokemonsArray(results);
        const pokemons = { results: detailedPokemonsArray, next };
        dispatch(successAction(pokemons));
      } catch (error: any) {
        dispatch(fetchDetailedPokemonsRejected(error.message));
      }
    } catch (error: any) {
      dispatch(fetchPokemonsRejected(error.message));
    }
  };
}

export function fetchSortedPokemons(
  endpoint: string,
  successAction: AllSortedPokemonsSuccessActionCreator,
) {
  return async (dispatch: Dispatch<AllSortedPokemonsActions>) => {
    dispatch(fetchSortedPokemonsPending());
    try {
      const { data } = await axios.get(endpoint);
      const { results, next } = data;
      try {
        const detailedPokemonsArray = await getDetailedPokemonsArray(results);
        const pokemons = { results: detailedPokemonsArray, next };
        dispatch(successAction(pokemons));
      } catch (error: any) {
        dispatch(fetchDetailedPokemonsRejected(error.message));
      }
    } catch (error: any) {
      dispatch(fetchSortedPokemonsRejected(error.message));
    }
  };
}

export function fetchPokemon(endpoint: string) {
  return async (dispatch: Dispatch<PokemonActions>) => {
    try {
      dispatch(fetchPokemonPending());
      const { data: pokemon } = await axios.get(endpoint);
      dispatch(fetchPokemonFulfilled(pokemon));
    } catch (error: any) {
      dispatch(fetchPokemonRejected(error.message));
    }
  };
}

export function fetchSearchedPokemon(endpoint: string) {
  return async (dispatch: Dispatch<SearchedPokemonActions>) => {
    dispatch(fetchSearchedPokemonPending());
    try {
      const { data: pokemon } = await axios.get(endpoint);
      dispatch(fetchSearchedPokemonFulfilled(pokemon));
    } catch (error: any) {
      dispatch(fetchSearchedPokemonRejected(error.message));
    }
  };
}
