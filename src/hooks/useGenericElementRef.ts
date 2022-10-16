import { MutableRefObject, useRef } from "react";

export function useGenericElementRef<T>(): MutableRefObject<T | null> {
  const elementRef = useRef<T | null>(null);
  return elementRef;
}
