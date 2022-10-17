import { Pokemon } from "utils/types/types";
import { RootState } from "store/store";

export function pokemonsLoadingSelector(state: RootState): boolean {
  return state.pokemons.pokemons.loading;
}

export function searchedPokemonsLoadingSelector(state: RootState): boolean {
  return state.pokemons.searchedPokemon.loading;
}

export function loadSearchErrorSelector(state: RootState): string {
  return state.pokemons.searchedPokemon.error;
}

export function pokemonsListSelector(state: RootState): Pokemon[] {
  return state.pokemons.pokemons.pokemonsList;
}

export function nextPokemonsPageSelector(state: RootState): string {
  return state.pokemons.pokemons.nextPokemonsPage;
}

export function pokemonDetailsSelector(state: RootState): Pokemon {
  return state.pokemons.currentPokemon.pokemon;
}

export function mainPageModeSelector(state: RootState): string {
  return state.pokemons.mainPageMode;
}

export function searchedPokemonSelector(state: RootState): Pokemon {
  return state.pokemons.searchedPokemon.pokemon;
}
