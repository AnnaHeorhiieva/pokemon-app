import { Pokemon } from "store/pokemon/types";
import { RootState } from "store/store";
import { PokemonsState } from "./types";

export function pokemonsSelector(state: RootState): PokemonsState {
  return state.pokemons;
}

export function pokemonsLoadingSelector(state: RootState): boolean {
  return state.pokemons.loading;
}

export function pokemonsListSelector(state: RootState): Pokemon[] {
  return state.pokemons.pokemonsList;
}

export function nextPokemonsPageSelector(state: RootState): string {
  return state.pokemons.nextPokemonsPage;
}
