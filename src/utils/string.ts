import { filter } from "../utils";

export const toNumber = (v: string) => +v;

export const toInt = (v: string) => parseInt(v);

export const toFloat = (v: string) => parseFloat(v);

// Matches pattern inside a string
export const regex = (pattern: RegExp) =>
  filter<string>((v) => pattern.test(v));

