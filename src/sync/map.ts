import { Result, ok, err } from "elfs";
import { Error, PipeableSync } from "../types";
import {error} from "../utils";

/**
 * Sync pipeable which maps value from `$Input` to `Ok<$Output>`.
 *
 * @example
 * // PipeableSync<number, Result<string, Error>>
 * const doubleString = map((v: number) => `${v * 2}`);
 **/
export function map<$Input, $Output>(
  fn: (value: $Input) => $Output,
): PipeableSync<$Input, Result<$Output, Error<"MAP", $Input>>> {
  return (value: $Input) => {
    try {
      return ok(fn(value));
    } catch {
      return err(error("MAP")(value) as Error<"MAP", $Input>);
    }
  };
}

export const mapSync = map;
