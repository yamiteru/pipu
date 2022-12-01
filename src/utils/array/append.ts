import { transform } from "../other";

// Adds value at the end of an array
export const append = <Value>(value: Value) =>
  transform<Value[]>((v) => [...v, value]);

