import { Either, Predicate, Result, ResultErr, ResultOk, err, ok } from "elfs";
import { Error, Pipeable } from "../types";
import { error } from "../utils";

export function filter<$Input>(
  predicate: Predicate<$Input>,
): Pipeable<
  $Input,
  Either<[ResultOk<$Input>, ResultErr<Error<"FILTER", $Input>>]>
>;
export function filter<$Input, $TrueResult extends Result>(
  predicate: Predicate<$Input>,
  truePipeable: Pipeable<$Input, $TrueResult>,
): Pipeable<$Input, Either<[$TrueResult, ResultErr<Error<"FILTER", $Input>>]>>;
export function filter<
  $Input,
  $TrueResult extends Result,
  $FalseResult extends Result,
>(
  predicate: Predicate<$Input>,
  truePipeable: Pipeable<$Input, $TrueResult>,
  falsePipeable: Pipeable<$Input, $FalseResult>,
): Pipeable<$Input, Either<[$TrueResult, $FalseResult]>>;
/**
 * Pipeable which runs either `truePipeable` or `falsePipeable` based on return value of `predicate`.
 *
 * By default `truePipeable` returns `Ok<$Input>` and `falsePipeable` returns `Err<Error<"FILTER", $Input>>`.
 * */
export function filter<
  $Input,
  $TrueResult extends Result,
  $FalseResult extends Result,
>(
  predicate: Predicate<$Input>,
  truePipeable?: Pipeable<$Input, $TrueResult>,
  falsePipeable?: Pipeable<$Input, $FalseResult>,
) {
  return (value: $Input) => {
    if (predicate(value)) {
      return (
        truePipeable ||
        (((value) => ok(value)) as Pipeable<$Input, $TrueResult>)
      )(value);
    }

    return (falsePipeable || ((value) => err(error("FILTER")(value))))(value);
  };
}
