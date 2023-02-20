import { Either, Predicate, Result, ResultErr, ResultOk, err, ok } from "elfs";
import { Error, Pipeable } from "../types";
import { errorTuple } from "../utils";

export function filter<
  $Input,
  $TrueResult extends Result = ResultOk<$Input>,
  $FalseResult extends Result = ResultErr<Error<"FILTER", $Input>>,
>(
  predicate: Predicate<$Input>,
  truePipeable: Pipeable<$Input, $TrueResult> = (value) =>
    ok(value) as $TrueResult,
  falsePipeable: Pipeable<$Input, $FalseResult> = (value) =>
    err(errorTuple("FILTER", value)) as $FalseResult,
): Pipeable<$Input, Either<[$TrueResult, $FalseResult]>> {
  return (value) => {
    if (predicate(value)) {
      return truePipeable(value);
    }

    return falsePipeable(value);
  };
}
