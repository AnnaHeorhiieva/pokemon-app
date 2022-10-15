import { RootState } from "store/store";
import { Pokemon, PokemonState } from "./types";

export function pokemonSelector(state: RootState): PokemonState {
  return state.pokemon;
}

export function pokemonDetailsSelector(state: RootState): Pokemon {
  return state.pokemon.pokemon;
}
