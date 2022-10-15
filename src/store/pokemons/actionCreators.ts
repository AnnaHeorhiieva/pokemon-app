import {
  PokemonsActionsTypes,
  FetchPokemonsPendingAction,
  FetchPokemonsFulfilledAction,
  FetchPokemonsRejectedAction,
  PokemonsPokeApi,
} from "./types";

export function fetchPokemonsPending(): FetchPokemonsPendingAction {
  return {
    type: PokemonsActionsTypes.FETCH_POKEMONS_PENDING,
  };
}

export function fetchPokemonsFulfilled(
  pokemons: PokemonsPokeApi,
): FetchPokemonsFulfilledAction {
  return {
    type: PokemonsActionsTypes.FETCH_POKEMONS_FULFILLED,
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
