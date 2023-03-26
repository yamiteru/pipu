import { Either, Result, ResultErr, ResultOk, err, getErr, isErr } from "elfs";
import { Error, PipeableSync } from "../types";

/**
 * Sync pipeable which wraps sync pipeable and overrides its `Error`.
 *
 * It's recommended to use `error` function to create a custom `Error`.
 *
 * @example
 * // PipeableSync<number, Result<number, Error<"CUSTOM", number>>>
 * wrap(
 *   map((v: number) => v * 2),
 *   error("CUSTOM"),
 * );
 **/
export function wrap<
  $Input,
  $Output,
  $InputError extends Error,
  $OutputError extends Error,
>(
  pipeable: PipeableSync<$Input, Result<$Output, $InputError>>,
  error: (value: $Input, error: $InputError) => $OutputError,
): PipeableSync<$Input, Either<[ResultOk<$Output>, ResultErr<$OutputError>]>> {
  return (value) => {
    const result = pipeable(value);

    if (isErr(result)) {
      return err(error(value, getErr(result)));
    }

    return result as ResultOk<$Output>;
  };
}

export const wrapeSync = wrap;
