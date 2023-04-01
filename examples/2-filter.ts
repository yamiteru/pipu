import { and, filter } from "../src/sync";

export const ageFilter = and(
  filter((v: number) => v >= 1),
  filter((v: number) => v <= 150),
);
