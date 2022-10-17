import produce from "immer";

import { sortPokemonsByType } from "utils/helpers/sortPokemonsByType";
import { Pokemon } from "utils/types/types";
import { PokemonsState, PokemonsActions, PokemonsActionsTypes } from "./types";

const initialState = {
  pokemons: {
    nextPokemonsPage: "",
    pokemonsList: [],
    loading: false,
    error: "",
    loadAllError: "",
  },
  currentPokemon: {
    pokemon: {} as Pokemon,
    loading: false,
    error: "",
  },
  searchedPokemon: {
    pokemon: {} as Pokemon,
    error: "",
    loading: false,
  },
  mainPageMode: "common",
};

export default function pokemonsReducer(
  state: PokemonsState = initialState,
  action: PokemonsActions,
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case PokemonsActionsTypes.FETCH_POKEMONS_PENDING:
        draft.pokemons.loading = true;
        break;

      case PokemonsActionsTypes.FETCH_POKEMONS_INITIAL_FULFILLED:
        draft.pokemons.nextPokemonsPage = action.payload.next;
        draft.pokemons.loading = false;
        draft.pokemons.pokemonsList = action.payload.results;
        draft.pokemons.error = "";
        break;

      case PokemonsActionsTypes.FETCH_POKEMONS_ON_SCROLL_FULFILLED:
        draft.pokemons.nextPokemonsPage = action.payload.next;
        draft.pokemons.loading = false;
        draft.pokemons.pokemonsList = [
          ...state.pokemons.pokemonsList,
          ...action.payload.results,
        ];
        break;

      case PokemonsActionsTypes.FETCH_POKEMONS_REJECTED:
        draft.pokemons.nextPokemonsPage = "";
        draft.pokemons.loading = false;
        draft.pokemons.pokemonsList = [];
        draft.pokemons.error = action.payload;
        break;

      case PokemonsActionsTypes.FETCH_DETAILED_POKEMONS_REJECTED:
        draft.pokemons.loadAllError = action.payload;
        break;

      case PokemonsActionsTypes.FETCH_SORTED_POKEMONS_PENDING:
        draft.pokemons.loading = true;
        break;

      case PokemonsActionsTypes.FETCH_SORTED_POKEMONS_INITIAL_FULFILLED: {
        const sortedPokemons = sortPokemonsByType(action.payload.results);
        draft.pokemons.nextPokemonsPage = action.payload.next;
        draft.pokemons.loading = false;
        draft.pokemons.pokemonsList = sortedPokemons;
        draft.pokemons.error = "";
        break;
      }

      case PokemonsActionsTypes.FETCH_SORTED_POKEMONS_ON_SCROLL_FULFILLED: {
        const dataForSorting = [...state.pokemons.pokemonsList].concat(
          action.payload.results,
        );
        const sortedPokemons = sortPokemonsByType(dataForSorting);
        draft.pokemons.nextPokemonsPage = action.payload.next;
        draft.pokemons.loading = false;
        draft.pokemons.pokemonsList = sortedPokemons;
        draft.pokemons.error = "";
        break;
      }

      case PokemonsActionsTypes.FETCH_SORTED_POKEMONS_REJECTED:
        draft.pokemons.nextPokemonsPage = "";
        draft.pokemons.loading = false;
        draft.pokemons.pokemonsList = [];
        draft.pokemons.error = action.payload;
        break;

      case PokemonsActionsTypes.FETCH_POKEMON_PENDING:
        draft.currentPokemon.loading = true;
        break;

      case PokemonsActionsTypes.FETCH_POKEMON_FULFILLED:
        draft.currentPokemon.pokemon = action.payload;
        draft.currentPokemon.loading = false;
        draft.currentPokemon.error = "";
        break;

      case PokemonsActionsTypes.FETCH_POKEMON_REJECTED:
        draft.currentPokemon.error = action.payload;
        draft.currentPokemon.pokemon = {} as Pokemon;
        draft.currentPokemon.loading = false;
        break;

      case PokemonsActionsTypes.FETCH_SEARCHED_POKEMON_PENDING:
        draft.searchedPokemon.loading = true;
        break;

      case PokemonsActionsTypes.FETCH_SEARCHED_POKEMON_FULFILLED:
        draft.searchedPokemon.pokemon = action.payload;
        draft.searchedPokemon.loading = false;
        draft.searchedPokemon.error = "";
        break;

      case PokemonsActionsTypes.FETCH_SEARCHED_POKEMON_REJECTED:
        draft.searchedPokemon.pokemon = {} as Pokemon;
        draft.searchedPokemon.loading = false;
        draft.searchedPokemon.error = action.payload;
        break;

      case PokemonsActionsTypes.SET_MAIN_PAGE_MODE:
        draft.mainPageMode = action.payload;
        break;

      case PokemonsActionsTypes.RESET_POKEMONS_STATE:
        draft.pokemons = initialState.pokemons;
        draft.currentPokemon = initialState.currentPokemon;
        draft.searchedPokemon = initialState.searchedPokemon;
        draft.mainPageMode = initialState.mainPageMode;
        break;

      default:
        return state;
    }
  });
}
