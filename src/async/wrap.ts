import { Either, Result, ResultErr, ResultOk, err, getErr, isErr } from "elfs";
import { Error, PipeableAsync } from "../types";

/**
 * Async pipeable which wraps async pipeable and overrides its `Error`.
 *
 * It's recommended to `error` function to create a custom `Error`.
 *
 * @example
 * // PipeableAsync<number, Result<number, Error<"CUSTOM", number>>>
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
  pipeable: PipeableAsync<$Input, Result<$Output, $InputError>>,
  error: (value: $Input, error: $InputError) => $OutputError,
): PipeableAsync<$Input, Either<[ResultOk<$Output>, ResultErr<$OutputError>]>> {
  return async (value) => {
    const result = await pipeable(value);

    if (isErr(result)) {
      return err(error(value, getErr(result)));
    }

    return result as ResultOk<$Output>;
  };
}
