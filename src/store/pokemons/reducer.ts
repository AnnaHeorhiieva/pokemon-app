import { PokemonsState, PokemonsActions, PokemonsActionsTypes } from "./types";

const initialState = {
  pokemonsCount: 0,
  nextPokemonsPage: "",
  previousPokemonsPage: "",
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
    case PokemonsActionsTypes.FETCH_POKEMONS_FULFILLED:
      return {
        ...state,
        pokemonsCount: action.payload.count,
        nextPokemonsPage: action.payload.next,
        previousPokemonsPage: action.payload.previous,
        loading: false,
        pokemonsList: action.payload.results,
        error: "",
      };
    case PokemonsActionsTypes.FETCH_POKEMONS_REJECTED:
      return {
        ...state,
        pokemonsCount: 0,
        nextPokemonsPage: "",
        previousPokemonsPage: "",
        loading: false,
        pokemonsList: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
