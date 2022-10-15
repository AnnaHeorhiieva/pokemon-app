export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

export interface VersionGameIndex {
  game_index: number;
  version: NamedAPIResource;
}

export interface PokemonHeldItemVersion {
  rarity: number;
  version: NamedAPIResource;
}

export interface PokemonHeldItem {
  item: NamedAPIResource;
  version_details: PokemonHeldItemVersion[];
}

export interface PokemonMoveVersion {
  level_learned_at: number;
  version_group: NamedAPIResource;
  move_learn_method: NamedAPIResource;
}

export interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersion[];
}

export interface PokemonSprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

export interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

export interface PokemonTypePast {
  generation: NamedAPIResource;
  types: PokemonType[];
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedAPIResource[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  species: NamedAPIResource;
  sprites: PokemonSprites;
  // sprites: {
  //   back_default: string;
  //   back_female: null;
  //   back_shiny: string;
  //   back_shiny_female: null;
  //   front_default: string;
  //   front_female: null;
  //   front_shiny: string;
  //   front_shiny_female: null;
  //   other: {
  //     dream_world: {
  //       front_default: string;
  //       front_female: null;
  //     };
  //     home: {
  //       front_default: string;
  //       front_female: null;
  //       front_shiny: string;
  //       front_shiny_female: null;
  //     };
  //     "official-artwork": {
  //       front_default: string;
  //     };
  //   };
  //   versions: {
  //     "generation-i": {
  //       "red-blue": {
  //         back_default: string;
  //         back_gray: string;
  //         front_default: string;
  //         front_gray: string;
  //       };
  //       yellow: {
  //         back_default: string;
  //         back_gray: string;
  //         front_default: string;
  //         front_gray: string;
  //       };
  //     };
  //     "generation-ii": {
  //       crystal: {
  //         back_default: string;
  //         back_shiny: string;
  //         front_default: string;
  //         front_shiny: string;
  //       };
  //       gold: {
  //         back_default: string;
  //         back_shiny: string;
  //         front_default: string;
  //         front_shiny: string;
  //       };
  //       silver: {
  //         back_default: string;
  //         back_shiny: string;
  //         front_default: string;
  //         front_shiny: string;
  //       };
  //     };
  //     "generation-iii": {
  //       emerald: {
  //         front_default: string;
  //         front_shiny: string;
  //       };
  //       "firered-leafgreen": {
  //         back_default: string;
  //         back_shiny: string;
  //         front_default: string;
  //         front_shiny: string;
  //       };
  //       "ruby-sapphire": {
  //         back_default: string;
  //         back_shiny: string;
  //         front_default: string;
  //         front_shiny: string;
  //       };
  //     };
  //     "generation-iv": {
  //       "diamond-pearl": {
  //         back_default: string;
  //         back_female: null;
  //         back_shiny: string;
  //         back_shiny_female: null;
  //         front_default: string;
  //         front_female: null;
  //         front_shiny: string;
  //         front_shiny_female: null;
  //       };
  //       "heartgold-soulsilver": {
  //         back_default: string;
  //         back_female: null;
  //         back_shiny: string;
  //         back_shiny_female: null;
  //         front_default: string;
  //         front_female: null;
  //         front_shiny: string;
  //         front_shiny_female: null;
  //       };
  //       platinum: {
  //         back_default: string;
  //         back_female: null;
  //         back_shiny: string;
  //         back_shiny_female: null;
  //         front_default: string;
  //         front_female: null;
  //         front_shiny: string;
  //         front_shiny_female: null;
  //       };
  //     };
  //     "generation-v": {
  //       "black-white": {
  //         animated: {
  //           back_default: string;
  //           back_female: null;
  //           back_shiny: string;
  //           back_shiny_female: null;
  //           front_default: string;
  //           front_female: null;
  //           front_shiny: string;
  //           front_shiny_female: null;
  //         };
  //         back_default: string;
  //         back_female: null;
  //         back_shiny: string;
  //         back_shiny_female: null;
  //         front_default: string;
  //         front_female: null;
  //         front_shiny: string;
  //         front_shiny_female: null;
  //       };
  //     };
  //     "generation-vi": {
  //       "omegaruby-alphasapphire": {
  //         front_default: string;
  //         front_female: null;
  //         front_shiny: string;
  //         front_shiny_female: null;
  //       };
  //       "x-y": {
  //         front_default: string;
  //         front_female: null;
  //         front_shiny: string;
  //         front_shiny_female: null;
  //       };
  //     };
  //     "generation-vii": {
  //       icons: {
  //         front_default: string;
  //         front_female: null;
  //       };
  //       "ultra-sun-ultra-moon": {
  //         front_default: string;
  //         front_female: null;
  //         front_shiny: string;
  //         front_shiny_female: null;
  //       };
  //     };
  //     "generation-viii": {
  //       icons: {
  //         front_default: string;
  //         front_female: null;
  //       };
  //     };
  //   };
  // };
  stats: PokemonStat[];
  types: PokemonType[];
  past_types: PokemonTypePast[];
}

export interface PokemonState {
  pokemon: Pokemon;
  error: string;
}

export enum PokemonActionsTypes {
  FETCH_POKEMON_PENDING = "pokemon/fetchPokemon/pending",
  FETCH_POKEMON_FULFILLED = "pokemon/fetchPokemon/fulfilled",
  FETCH_POKEMON_REJECTED = "pokemon/fetchPokemon/rejected",
}

export interface FetchPokemonPendingAction {
  type: PokemonActionsTypes.FETCH_POKEMON_PENDING;
}

export interface FetchPokemonFulfilledAction {
  type: PokemonActionsTypes.FETCH_POKEMON_FULFILLED;
  payload: Pokemon;
}

export interface FetchPokemonRejectedAction {
  type: PokemonActionsTypes.FETCH_POKEMON_REJECTED;
  payload: string;
}

export type PokemonActions =
  | FetchPokemonPendingAction
  | FetchPokemonFulfilledAction
  | FetchPokemonRejectedAction;
