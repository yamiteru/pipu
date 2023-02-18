import {
  condition,
  ifElse,
  tryCatch,
  pipe,
  customError,
  createError,
  either,
  both,
} from "../src";

const simplePipe = pipe(
  tryCatch(
    both(
      condition<number>((v) => v > 0),
      condition<number>((v) => v <= 100),
    ),
    () => 0,
  ),
  customError(
    either(
      condition<number>((v) => !(v % 2)),
      condition<number>((v) => !(v % 3)),
    ),
    createError("DIVIDABLE", (value) => ({ value, by: [2, 3] })),
  ),
  ifElse(
    (v) => v >= 50,
    () => "4/4",
    () => "2/4",
  ),
  (v) => `Result: ${v}`,
);

// Error: { reason: "DIVIDABLE", value: 35, by: [2, 3] }
// console.log(simplePipe(35));

// Result: 2/4
console.log(simplePipe(-25));

// Result: 4/4
console.log(simplePipe(80));
