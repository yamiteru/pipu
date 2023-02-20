import { customError, filter, map, pipe, pipeError } from "../src";

const customPipe = pipe(
  filter<number>((v) => v > 10),
  customError(
    map((v) => `${v}`),
    (value) => pipeError("MAP", value),
  ),
  filter<string>((v) => v.includes("0")),
);

console.log(customPipe(1));
console.log(customPipe(2));
