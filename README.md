## Tasks Completed

1. SPA shows the list of pokemons fetched from PokeAPI. 
2. Pokemons are uploaded using infinite scroll functionality enabled by IntersectionObserver API (pokemon items are appended to the list gradually by portions of 15 items).
3. User can search the pokemon by name (only exact search by name allowed as it is the only way enabled by PokeAPI). In case there is a search error (word spelling error or the requested pokemon does not exist), user is informed about the rejection reason.
4. User can sort pokemons by type in alphabetic order (only client-side sort possible as PokeAPI does not provide such functionality).
5. User can reset sort or search mode and return back to ordinary page state with the initial list of pokemon items.
6. By clicking on any pokemon item from the list user can go to the pokemon details page and find out more info regarding the requested pokemon.

## Technologies

1. React
2. Typescript
3. Redux
4. redux-thunk
5. immer
6. React-Router
7. Material UI
8. SCSS

## Deployed App

pokemon-pokeapi-app.netlify.app/
