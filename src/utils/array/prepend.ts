import { transform } from "../other";

// Adds value at the beginning of an array
export const prepend = <Value>(value: Value) =>
  transform<Value[]>((v) => [value, ...v]);

