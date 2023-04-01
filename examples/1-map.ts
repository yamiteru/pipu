import { and, map } from "../src/sync";

export const doubleToString = and(
  map((v: number) => v * 2),
  map((v: number) => `${v}`),
);
