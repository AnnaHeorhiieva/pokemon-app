export function retrieveItemFieldName<T extends { [key: string]: any }>(
  item: T,
  itemField: string,
) {
  const { name } = item[itemField];
  return name;
}

export function formArrayOfNames<T extends { [key: string]: any }>(
  arrayOfItems: T[],
  itemField: string,
) {
  const mapCb = (item: T) => retrieveItemFieldName<T>(item, itemField);
  const arrayOfNames = arrayOfItems?.map(mapCb);
  return arrayOfNames;
}
