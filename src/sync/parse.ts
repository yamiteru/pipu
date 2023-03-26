import { Result } from "elfs";
import { PipeableSyncOutput } from "../types";

/**
 * Allows to run `PipeableSync` with `unknown` input while infering everything else from the `PipeableSync` as usual.
 *
 * @example
 * const isStringOrNumber = pipe(...);
 * // ResultErr<["OR", [], { }]>
 * const result1 = parse(isStringOrNumber, []);
 * // ResultOk<1>
 * const result2 = parse(isStringOrNumber, 1);
 **/
export function parse<$Result extends Result>(
  pipeable: PipeableSyncOutput<$Result>,
  data: unknown,
) {
  return pipeable(data);
}

export const parseSync = parse;
