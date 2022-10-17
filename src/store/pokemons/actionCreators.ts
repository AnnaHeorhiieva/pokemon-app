import { Pokemon } from "utils/types/types";
import {
  PokemonsActionsTypes,
  FetchPokemonsPendingAction,
  FetchPokemonsInitialFulfilledAction,
  FetchPokemonsOnScrollFulfilledAction,
  FetchPokemonsRejectedAction,
  FetchPokemonPendingAction,
  FetchPokemonFulfilledAction,
  FetchPokemonRejectedAction,
  FetchSearchedPokemonPendingAction,
  FetchSearchedPokemonFulfilledAction,
  FetchSearchedPokemonRejectedAction,
  DetailedPokemons,
  SetMainPageModeAction,
  FetchSortedPokemonsPendingAction,
  FetchSortedPokemonsInitialFulfilledAction,
  FetchSortedPokemonsOnScrollFulfilledAction,
  FetchSortedPokemonsRejectedAction,
  ResetPokemonsStateAction,
  FetchDetailedPokemonsRejectedAction,
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

export function fetchDetailedPokemonsRejected(
  errorMessage: string,
): FetchDetailedPokemonsRejectedAction {
  return {
    type: PokemonsActionsTypes.FETCH_DETAILED_POKEMONS_REJECTED,
    payload: errorMessage,
  };
}

export function fetchSortedPokemonsPending(): FetchSortedPokemonsPendingAction {
  return {
    type: PokemonsActionsTypes.FETCH_SORTED_POKEMONS_PENDING,
  };
}

export function fetchSortedPokemonsInitialFulfilled(
  pokemons: DetailedPokemons,
): FetchSortedPokemonsInitialFulfilledAction {
  return {
    type: PokemonsActionsTypes.FETCH_SORTED_POKEMONS_INITIAL_FULFILLED,
    payload: pokemons,
  };
}

export function fetchSortedPokemonsOnScrollFulfilled(
  pokemons: DetailedPokemons,
): FetchSortedPokemonsOnScrollFulfilledAction {
  return {
    type: PokemonsActionsTypes.FETCH_SORTED_POKEMONS_ON_SCROLL_FULFILLED,
    payload: pokemons,
  };
}

export function fetchSortedPokemonsRejected(
  errorMessage: string,
): FetchSortedPokemonsRejectedAction {
  return {
    type: PokemonsActionsTypes.FETCH_SORTED_POKEMONS_REJECTED,
    payload: errorMessage,
  };
}

export function fetchPokemonPending(): FetchPokemonPendingAction {
  return {
    type: PokemonsActionsTypes.FETCH_POKEMON_PENDING,
  };
}

export function fetchPokemonFulfilled(
  pokemon: Pokemon,
): FetchPokemonFulfilledAction {
  return {
    type: PokemonsActionsTypes.FETCH_POKEMON_FULFILLED,
    payload: pokemon,
  };
}

export function fetchPokemonRejected(
  errorMessage: string,
): FetchPokemonRejectedAction {
  return {
    type: PokemonsActionsTypes.FETCH_POKEMON_REJECTED,
    payload: errorMessage,
  };
}

export function fetchSearchedPokemonPending(): FetchSearchedPokemonPendingAction {
  return {
    type: PokemonsActionsTypes.FETCH_SEARCHED_POKEMON_PENDING,
  };
}

export function fetchSearchedPokemonFulfilled(
  pokemon: Pokemon,
): FetchSearchedPokemonFulfilledAction {
  return {
    type: PokemonsActionsTypes.FETCH_SEARCHED_POKEMON_FULFILLED,
    payload: pokemon,
  };
}

export function fetchSearchedPokemonRejected(
  errorMessage: string,
): FetchSearchedPokemonRejectedAction {
  return {
    type: PokemonsActionsTypes.FETCH_SEARCHED_POKEMON_REJECTED,
    payload: errorMessage,
  };
}

export function setMainPageMode(mode: string): SetMainPageModeAction {
  return {
    type: PokemonsActionsTypes.SET_MAIN_PAGE_MODE,
    payload: mode,
  };
}

export function resetPokemonsState(): ResetPokemonsStateAction {
  return {
    type: PokemonsActionsTypes.RESET_POKEMONS_STATE,
  };
}
