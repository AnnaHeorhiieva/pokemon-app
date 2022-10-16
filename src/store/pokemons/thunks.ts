import axios from "axios";
import { Dispatch } from "redux";

import { NamedAPIResource } from "store/pokemon/types";
import { fetchPokemonsPending, fetchPokemonsRejected } from "./actionCreators";
import { PokemonsActions, SuccessActionCreator } from "./types";

async function getDetailedPokemonsArray(results: NamedAPIResource[]) {
  const resultsMapCb = (result: NamedAPIResource) => result.url;
  const detailsUrlsArrayMapCb = (url: string) => axios.get(url);
  const detailedPokemonsMapCb = (result: any) => result.data;
  const detailsUrlsArray = results.map(resultsMapCb);
  const promiseIterable = detailsUrlsArray.map(detailsUrlsArrayMapCb);
  const promiseAllResults = await Promise.all(promiseIterable);
  const detailedPokemonsArray = promiseAllResults.map(detailedPokemonsMapCb);
  return detailedPokemonsArray;
}

export function fetchPokemons(
  endpoint: string,
  successAction: SuccessActionCreator,
) {
  return async (dispatch: Dispatch<PokemonsActions>) => {
    try {
      dispatch(fetchPokemonsPending());
      const { data } = await axios.get(endpoint);
      const { results, next } = data;
      const detailedPokemonsArray = await getDetailedPokemonsArray(results);
      const pokemons = { results: detailedPokemonsArray, next };
      dispatch(successAction(pokemons));
    } catch (error: any) {
      // check if error.message correct
      dispatch(fetchPokemonsRejected(error.message));
    }
  };
}
