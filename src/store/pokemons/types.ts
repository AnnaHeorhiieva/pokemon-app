import { NamedAPIResource, Pokemon } from "store/pokemon/types";

export interface PokemonsPokeApi {
  count: number;
  next: string;
  previous: string;
  results: NamedAPIResource[];
}

export interface DetailedPokemons {
  next: string;
  results: Pokemon[];
}

export interface PokemonsState {
  nextPokemonsPage: string;
  pokemonsList: Pokemon[];
  loading: boolean;
  error: string;
}

export enum PokemonsActionsTypes {
  FETCH_POKEMONS_PENDING = "pokemons/fetchPokemons/pending",
  FETCH_POKEMONS_INITIAL_FULFILLED = "pokemons/fetchPokemonsInitial/fulfilled",
  FETCH_POKEMONS_ON_SCROLL_FULFILLED = "pokemons/fetchPokemonsOnScroll/fulfilled",
  FETCH_POKEMONS_REJECTED = "pokemons/fetchPokemons/rejected",
}

export interface FetchPokemonsPendingAction {
  type: PokemonsActionsTypes.FETCH_POKEMONS_PENDING;
}

export interface FetchPokemonsInitialFulfilledAction {
  type: PokemonsActionsTypes.FETCH_POKEMONS_INITIAL_FULFILLED;
  payload: DetailedPokemons;
}

export interface FetchPokemonsOnScrollFulfilledAction {
  type: PokemonsActionsTypes.FETCH_POKEMONS_ON_SCROLL_FULFILLED;
  payload: DetailedPokemons;
}

export interface FetchPokemonsRejectedAction {
  type: PokemonsActionsTypes.FETCH_POKEMONS_REJECTED;
  payload: string;
}

export type PokemonsSuccessActions =
  | FetchPokemonsInitialFulfilledAction
  | FetchPokemonsOnScrollFulfilledAction;

export type SuccessActionCreator = (
  pokemons: DetailedPokemons,
) => PokemonsSuccessActions;

export type PokemonsActions =
  | FetchPokemonsPendingAction
  | PokemonsSuccessActions
  | FetchPokemonsRejectedAction;
