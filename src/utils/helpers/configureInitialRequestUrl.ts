export function configureInitialRequestUrl(limit: number): string {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`;
  return url;
}
