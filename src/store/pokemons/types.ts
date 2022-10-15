import { NamedAPIResource } from "store/pokemon/types";

export interface PokemonsPokeApi {
  count: number;
  next: string;
  previous: string;
  results: NamedAPIResource[];
}

export interface PokemonsState {
  pokemonsCount: number;
  nextPokemonsPage: string;
  previousPokemonsPage: string;
  pokemonsList: NamedAPIResource[];
  loading: boolean;
  error: string;
}

export enum PokemonsActionsTypes {
  FETCH_POKEMONS_PENDING = "pokemons/fetchPokemons/pending",
  FETCH_POKEMONS_FULFILLED = "pokemons/fetchPokemons/fulfilled",
  FETCH_POKEMONS_REJECTED = "pokemons/fetchPokemons/rejected",
}

export interface FetchPokemonsPendingAction {
  type: PokemonsActionsTypes.FETCH_POKEMONS_PENDING;
}

export interface FetchPokemonsFulfilledAction {
  type: PokemonsActionsTypes.FETCH_POKEMONS_FULFILLED;
  payload: PokemonsPokeApi;
}

export interface FetchPokemonsRejectedAction {
  type: PokemonsActionsTypes.FETCH_POKEMONS_REJECTED;
  payload: string;
}

export type PokemonsActions =
  | FetchPokemonsPendingAction
  | FetchPokemonsFulfilledAction
  | FetchPokemonsRejectedAction;
