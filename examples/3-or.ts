import {filter, or} from "../src/sync";

export const tenOrTwenty = or(
  filter((v: number) => v === 10),
  filter((v: number) => v === 20),
);
