import {
  Pokemon,
  PokemonActionsTypes,
  FetchPokemonPendingAction,
  FetchPokemonFulfilledAction,
  FetchPokemonRejectedAction,
} from "./types";

export function fetchPokemonPending(): FetchPokemonPendingAction {
  return {
    type: PokemonActionsTypes.FETCH_POKEMON_PENDING,
  };
}

export function fetchPokemonFulfilled(
  pokemon: Pokemon,
): FetchPokemonFulfilledAction {
  return {
    type: PokemonActionsTypes.FETCH_POKEMON_FULFILLED,
    payload: pokemon,
  };
}

export function fetchPokemonRejected(
  errorMessage: string,
): FetchPokemonRejectedAction {
  return {
    type: PokemonActionsTypes.FETCH_POKEMON_REJECTED,
    payload: errorMessage,
  };
}
