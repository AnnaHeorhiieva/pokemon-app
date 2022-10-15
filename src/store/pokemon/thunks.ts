import axios from "axios";
import { Dispatch } from "redux";

import {
  // fetchPokemonPending,
  fetchPokemonFulfilled,
  fetchPokemonRejected,
} from "./actionCreators";
import { PokemonActions } from "./types";

export function fetchPokemon(endpoint: string) {
  return async (dispatch: Dispatch<PokemonActions>) => {
    try {
      // dispatch(fetchPokemonPending());
      const { data: pokemon } = await axios.get(endpoint);
      console.log({ pokemon });
      dispatch(fetchPokemonFulfilled(pokemon));
    } catch (error: any) {
      dispatch(fetchPokemonRejected(error.message));
    }
  };
}
