export function addIndexToString(stringValue: string, index: number) {
  const indexedString = `${stringValue} ${index + 1}`;
  return indexedString;
}
