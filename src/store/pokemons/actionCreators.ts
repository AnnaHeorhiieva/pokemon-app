import { Pokemon } from "store/pokemon/types";
import {
  PokemonsActionsTypes,
  FetchPokemonsPendingAction,
  FetchPokemonsInitialFulfilledAction,
  FetchPokemonsOnScrollFulfilledAction,
  FetchPokemonsRejectedAction,
  DetailedPokemons,
} from "./types";

export function fetchPokemonsPending(): FetchPokemonsPendingAction {
  return {
    type: PokemonsActionsTypes.FETCH_POKEMONS_PENDING,
  };
}

export function fetchPokemonsInitialFulfilled(
  pokemons: DetailedPokemons,
): FetchPokemonsInitialFulfilledAction {
  return {
    type: PokemonsActionsTypes.FETCH_POKEMONS_INITIAL_FULFILLED,
    payload: pokemons,
  };
}

export function fetchPokemonsOnScrollFulfilled(
  pokemons: DetailedPokemons,
): FetchPokemonsOnScrollFulfilledAction {
  return {
    type: PokemonsActionsTypes.FETCH_POKEMONS_ON_SCROLL_FULFILLED,
    payload: pokemons,
  };
}

export function fetchPokemonsRejected(
  errorMessage: string,
): FetchPokemonsRejectedAction {
  return {
    type: PokemonsActionsTypes.FETCH_POKEMONS_REJECTED,
    payload: errorMessage,
  };
}
