import { NamedAPIResource } from "store/pokemon/types";
import { RootState } from "store/store";
import { PokemonsState } from "./types";

export function pokemonsSelector(state: RootState): PokemonsState {
  return state.pokemons;
}

export function pokemonsListSelector(state: RootState): NamedAPIResource[] {
  return state.pokemons.pokemonsList;
}

export function nextPokemonsPageSelector(state: RootState): string {
  return state.pokemons.nextPokemonsPage;
}

export function previousPokemonsPageSelector(state: RootState): string {
  return state.pokemons.previousPokemonsPage;
}
