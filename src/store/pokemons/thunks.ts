import axios from "axios";
import { Dispatch } from "redux";

import {
  fetchPokemonsPending,
  fetchPokemonsFulfilled,
  fetchPokemonsRejected,
} from "./actionCreators";
import { PokemonsActions } from "./types";

export function fetchPokemons(endpoint: string) {
  return async (dispatch: Dispatch<PokemonsActions>) => {
    try {
      dispatch(fetchPokemonsPending());
      const { data: pokemonsList } = await axios.get(endpoint);
      dispatch(fetchPokemonsFulfilled(pokemonsList));
    } catch (error: any) {
      // check if error.message correct
      dispatch(fetchPokemonsRejected(error.message));
    }
  };
}
