import { call, map } from "../utils";

export const at = (i: number) => (v: unknown[]) => v.at(i);

// Flips array order
export const flip = call("reverse");

// Flattens array
export const flatten = call("flat");

// Adds value at the beginning of an array
export const prepend = <T>(value: T) =>
  map<T[]>((v) => [value, ...v]);

// Adds value at the end of an array
export const append = <T>(value: T) =>
  map<T[]>((v) => [...v, value]);

