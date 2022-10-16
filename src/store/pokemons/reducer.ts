import { PokemonsState, PokemonsActions, PokemonsActionsTypes } from "./types";

const initialState = {
  nextPokemonsPage: "",
  pokemonsList: [],
  loading: false,
  error: "",
};

export default function pokemonsReducer(
  state: PokemonsState = initialState,
  action: PokemonsActions,
): PokemonsState {
  switch (action.type) {
    case PokemonsActionsTypes.FETCH_POKEMONS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case PokemonsActionsTypes.FETCH_POKEMONS_INITIAL_FULFILLED:
      return {
        ...state,
        nextPokemonsPage: action.payload.next,
        loading: false,
        pokemonsList: action.payload.results,
        error: "",
      };
    case PokemonsActionsTypes.FETCH_POKEMONS_ON_SCROLL_FULFILLED:
      return {
        ...state,
        nextPokemonsPage: action.payload.next,
        loading: false,
        pokemonsList: [...state.pokemonsList].concat(action.payload.results),
        error: "",
      };
    case PokemonsActionsTypes.FETCH_POKEMONS_REJECTED:
      return {
        ...state,
        nextPokemonsPage: "",
        loading: false,
        pokemonsList: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
