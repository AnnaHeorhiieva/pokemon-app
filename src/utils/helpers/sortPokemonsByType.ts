import { Pokemon } from "utils/types/types";

function sortCallback(a: Pokemon, b: Pokemon) {
  const typeA = a.types[0].type.name as any;
  const typeB = b.types[0].type.name as any;
  return typeA.localeCompare(typeB);
}

export function sortPokemonsByType(dataForSorting: Pokemon[]) {
  const sortedData = dataForSorting.sort(sortCallback);
  return sortedData;
}
