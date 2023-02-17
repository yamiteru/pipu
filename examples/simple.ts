import { and, or, filter, match, option, pipe } from "../src";

const simplePipe = pipe(
  match([
    option<string, number>(
      (v) => typeof v === "string",
      (v) => +v,
    ),
    option<number, number>(
      (v) => typeof v === "number",
      (v) => v,
    ),
  ]),
  and(
    filter<number>((v) => v > 0),
    filter<number>((v) => v <= 100),
  ),
  match([
    option<number, "1/4">(
      (v) => v <= 25,
      () => "1/4",
    ),
    option<number, "2/4">(
      (v) => v <= 50,
      () => "2/4",
    ),
    option<number, "3/4">(
      (v) => v <= 75,
      () => "3/4",
    ),
    option<number, "4/4">(
      () => true,
      () => "4/4",
    ),
  ]),
  or(
    filter<string>((v) => +v[0] === 2),
    filter<string>((v) => +v[0] === 4),
  ),
  (v) => `Result: ${v}`,
);

// Result: 2/4
console.log(simplePipe("35"));

// Result: 4/4
console.log(simplePipe(80));
