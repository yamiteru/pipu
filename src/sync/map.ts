import { Result, ok } from "elfs";
import { Error, PipeableSync } from "../types";

/**
 * Sync pipeable which maps value from `$Input` to `Ok<$Output>`.
 *
 * @example
 * // PipeableSync<number, Result<string, Error>>
 * const doubleString = map((v: number) => `${v * 2}`);
 **/
export function map<$Input, $Output>(
  fn: (value: $Input) => $Output,
): PipeableSync<$Input, Result<$Output, Error>> {
  return (value) => {
    return ok(fn(value));
  };
}
