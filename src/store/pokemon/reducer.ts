import {
  Pokemon,
  PokemonState,
  PokemonActions,
  PokemonActionsTypes,
} from "./types";

const initialState = {
  pokemon: {} as Pokemon,
  error: "",
};

export default function pokemonReducer(
  state: PokemonState = initialState,
  action: PokemonActions,
): PokemonState {
  switch (action.type) {
    // case PokemonActionsTypes.FETCH_POKEMON_PENDING:
    //   return {
    //     ...state,
    //     pokemon: { ...state.pokemons, loading: true },
    //   };
    case PokemonActionsTypes.FETCH_POKEMON_FULFILLED:
      return {
        ...state,
        pokemon: action.payload,
      };
    case PokemonActionsTypes.FETCH_POKEMON_REJECTED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
