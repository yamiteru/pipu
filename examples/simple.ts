import { pipe, and, or, filter, map } from "../src";

// TODO: get rid of all the ": number"
const customPipe = pipe(
  filter((v: number) => !(v % 2)),
  map((v: number) => v * 2),
  and(
    filter((v: number) => v >= 20),
    filter((v: number) => v <= 30),
  ),
  or(
    filter((v: number) => v - 20 === 4),
    filter((v: number) => v - 20 === 8),
  ),
  filter(
    (v: number) => v === 24,
    map((v) => `${v} === 24`),
    map((v) => `${v} === 28`),
  ),
);

console.log(customPipe(1));
console.log(customPipe(12));
