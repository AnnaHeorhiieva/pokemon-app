import { Pokemon, NamedAPIResource } from "utils/types/types";

export enum MainPageMode {
  COMMON = "common",
  SORT = "sort",
  SEARCH = "search",
}

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

export interface AllPokemonsState {
  nextPokemonsPage: string;
  pokemonsList: Pokemon[];
  loading: boolean;
  error: string;
  loadAllError: string;
}

export interface CurrentPokemonState {
  pokemon: Pokemon;
  loading: boolean;
  error: string;
}

export interface SearchedPokemonState {
  pokemon: Pokemon;
  error: string;
  loading: boolean;
}

export interface PokemonsState {
  pokemons: AllPokemonsState;
  currentPokemon: CurrentPokemonState;
  searchedPokemon: SearchedPokemonState;
  mainPageMode: MainPageMode;
}

export enum PokemonsActionsTypes {
  FETCH_POKEMONS_PENDING = "pokemons/fetchPokemons/pending",
  FETCH_POKEMONS_INITIAL_FULFILLED = "pokemons/fetchPokemonsInitial/fulfilled",
  FETCH_POKEMONS_ON_SCROLL_FULFILLED = "pokemons/fetchPokemonsOnScroll/fulfilled",
  FETCH_POKEMONS_REJECTED = "pokemons/fetchPokemons/rejected",
  FETCH_DETAILED_POKEMONS_REJECTED = "pokemons/fetchDetailedPokemons/rejected",
  FETCH_SORTED_POKEMONS_PENDING = "pokemons/fetchSortedPokemons/pending",
  FETCH_SORTED_POKEMONS_INITIAL_FULFILLED = "pokemons/fetchSortedPokemonsInitial/fulfilled",
  FETCH_SORTED_POKEMONS_ON_SCROLL_FULFILLED = "pokemons/fetchSortedPokemonsOnScroll/fulfilled",
  FETCH_SORTED_POKEMONS_REJECTED = "pokemons/fetchSortedPokemons/rejected",
  FETCH_POKEMON_PENDING = "pokemon/fetchPokemon/pending",
  FETCH_POKEMON_FULFILLED = "pokemons/fetchPokemon/fulfilled",
  FETCH_POKEMON_REJECTED = "pokemons/fetchPokemon/rejected",
  FETCH_SEARCHED_POKEMON_PENDING = "pokemons/fetchSearchedPokemon/pending",
  FETCH_SEARCHED_POKEMON_FULFILLED = "pokemons/fetchSearchedPokemon/fulfilled",
  FETCH_SEARCHED_POKEMON_REJECTED = "pokemons/fetchSearchedPokemon/rejected",
  SET_MAIN_PAGE_MODE = "pokemons/setMainPageMode",
  RESET_POKEMONS_STATE = "pokemons/resetPokemonsState",
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

export interface FetchDetailedPokemonsRejectedAction {
  type: PokemonsActionsTypes.FETCH_DETAILED_POKEMONS_REJECTED;
  payload: string;
}

export interface FetchSortedPokemonsPendingAction {
  type: PokemonsActionsTypes.FETCH_SORTED_POKEMONS_PENDING;
}

export interface FetchSortedPokemonsInitialFulfilledAction {
  type: PokemonsActionsTypes.FETCH_SORTED_POKEMONS_INITIAL_FULFILLED;
  payload: DetailedPokemons;
}

export interface FetchSortedPokemonsOnScrollFulfilledAction {
  type: PokemonsActionsTypes.FETCH_SORTED_POKEMONS_ON_SCROLL_FULFILLED;
  payload: DetailedPokemons;
}

export interface FetchSortedPokemonsRejectedAction {
  type: PokemonsActionsTypes.FETCH_SORTED_POKEMONS_REJECTED;
  payload: string;
}

export interface FetchPokemonPendingAction {
  type: PokemonsActionsTypes.FETCH_POKEMON_PENDING;
}

export interface FetchPokemonFulfilledAction {
  type: PokemonsActionsTypes.FETCH_POKEMON_FULFILLED;
  payload: Pokemon;
}

export interface FetchPokemonRejectedAction {
  type: PokemonsActionsTypes.FETCH_POKEMON_REJECTED;
  payload: string;
}

export interface FetchSearchedPokemonPendingAction {
  type: PokemonsActionsTypes.FETCH_SEARCHED_POKEMON_PENDING;
}

export interface FetchSearchedPokemonFulfilledAction {
  type: PokemonsActionsTypes.FETCH_SEARCHED_POKEMON_FULFILLED;
  payload: Pokemon;
}

export interface FetchSearchedPokemonRejectedAction {
  type: PokemonsActionsTypes.FETCH_SEARCHED_POKEMON_REJECTED;
  payload: string;
}

export interface SetMainPageModeAction {
  type: PokemonsActionsTypes.SET_MAIN_PAGE_MODE;
  payload: MainPageMode;
}

export interface ResetPokemonsStateAction {
  type: PokemonsActionsTypes.RESET_POKEMONS_STATE;
}

export type AllPokemonsSuccessActions =
  | FetchPokemonsInitialFulfilledAction
  | FetchPokemonsOnScrollFulfilledAction;

export type AllSortedPokemonsSuccessActions =
  | FetchSortedPokemonsInitialFulfilledAction
  | FetchSortedPokemonsOnScrollFulfilledAction
  | FetchDetailedPokemonsRejectedAction;

export type AllPokemonsSuccessActionCreator = (
  pokemons: DetailedPokemons,
) => AllPokemonsSuccessActions;

export type AllSortedPokemonsSuccessActionCreator = (
  pokemons: DetailedPokemons,
) => AllSortedPokemonsSuccessActions;

export type AllPokemonsActions =
  | FetchPokemonsPendingAction
  | AllPokemonsSuccessActions
  | FetchPokemonsRejectedAction
  | FetchDetailedPokemonsRejectedAction;

export type AllSortedPokemonsActions =
  | FetchSortedPokemonsPendingAction
  | AllSortedPokemonsSuccessActions
  | FetchSortedPokemonsRejectedAction;

export type PokemonActions =
  | FetchPokemonPendingAction
  | FetchPokemonFulfilledAction
  | FetchPokemonRejectedAction;

export type SearchedPokemonActions =
  | FetchSearchedPokemonPendingAction
  | FetchSearchedPokemonFulfilledAction
  | FetchSearchedPokemonRejectedAction;

export type PokemonsActions =
  | AllPokemonsActions
  | AllSortedPokemonsActions
  | PokemonActions
  | SearchedPokemonActions
  | SetMainPageModeAction
  | ResetPokemonsStateAction;
