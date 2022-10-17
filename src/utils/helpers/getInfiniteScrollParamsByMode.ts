import { fetchPokemons, fetchSortedPokemons } from "store/pokemons/thunks";
import {
  fetchPokemonsInitialFulfilled,
  fetchPokemonsOnScrollFulfilled,
  fetchSortedPokemonsInitialFulfilled,
  fetchSortedPokemonsOnScrollFulfilled,
} from "store/pokemons/actionCreators";
import { configureInitialRequestUrl } from "./configureRequestUrl";

export function getInfiniteScrollParamsByMode(
  mode: string,
  itemsPerPage: number,
  urlForNextRequest: string,
) {
  const urlForInitialRequest = configureInitialRequestUrl(itemsPerPage);

  const modesConfig: { [key: string]: any } = {
    common: {
      apiUrls: { urlForInitialRequest, urlForNextRequest },
      updaters: {
        actionCreator: fetchPokemons,
        initialUpdater: fetchPokemonsInitialFulfilled,
        onScrollUpdater: fetchPokemonsOnScrollFulfilled,
      },
    },
    sort: {
      apiUrls: { urlForInitialRequest, urlForNextRequest },
      updaters: {
        actionCreator: fetchSortedPokemons,
        initialUpdater: fetchSortedPokemonsInitialFulfilled,
        onScrollUpdater: fetchSortedPokemonsOnScrollFulfilled,
      },
    },
  };

  const infiniteScrollParams = modesConfig[mode];
  return infiniteScrollParams;
}
