import { Either, Result, ResultErr, ResultOk, err, getErr, isErr } from "elfs";
import { Error, Pipeable } from "../types";

export function wrap<
  $Input,
  $Output,
  $InputError extends Error,
  $OutputError extends Error,
>(
  pipeable: Pipeable<$Input, Result<$Output, $InputError>>,
  error: (value: $Input, error: $InputError) => $OutputError,
): Pipeable<$Input, Either<[ResultOk<$Output>, ResultErr<$OutputError>]>> {
  return (value) => {
    const result = pipeable(value);

    if (isErr(result)) {
      return err(error(value, getErr(result)));
    }

    return result as ResultOk<$Output>;
  };
}
