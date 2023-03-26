import { Result } from "elfs";
import { PipeableOutput } from "../types";

/**
 * Allows to run `PipeableAsync` with `unknown` input while infering everything else from the `PipeableAsync` as usual.
 *
 * @example
 * const isStringOrNumber = pipe(...);
 * // ResultErr<["OR", [], { }]>
 * const result1 = await parse(isStringOrNumber, []);
 * // ResultOk<1>
 * const result2 = await parse(isStringOrNumber, 1);
 **/
export async function parse<$Result extends Result>(
  pipeable: PipeableOutput<$Result>,
  data: unknown,
) {
  return await pipeable(data);
}

export const parseAsync = parse;
