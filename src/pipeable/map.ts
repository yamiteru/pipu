import { Result, ok } from "elfs";
import { Error, Pipeable } from "../types";

/**
 * Pipeable which maps value from `$Input` to `$Output`.
 *
 * @example
 * // Pipeable<number, Result<string, Error>>
 * const doubleString = map((v: number) => `${v * 2}`);
 * */
export function map<$Input, $Output>(
  fn: (value: $Input) => $Output,
): Pipeable<$Input, Result<$Output, Error>> {
  return (value) => {
    return ok(fn(value));
  };
}
