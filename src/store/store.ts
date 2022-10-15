import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";

import pokemonReducer from "./pokemon/reducer";
import pokemonsReducer from "./pokemons/reducer";

export const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  pokemons: pokemonsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware)),
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
