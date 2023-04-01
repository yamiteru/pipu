import { Either, Predicate, Result, ResultErr, ResultOk, err, ok } from "elfs";
import { Error, PipeableSync } from "../types";
import { error } from "../utils";

export function filter<$Input>(
  predicate: Predicate<$Input>,
): PipeableSync<
  $Input,
  Either<[ResultOk<$Input>, ResultErr<Error<"FILTER", $Input>>]>
>;
export function filter<$Input, $TrueResult extends Result>(
  predicate: Predicate<$Input>,
  truePipeable: PipeableSync<$Input, $TrueResult>,
): PipeableSync<
  $Input,
  Either<[$TrueResult, ResultErr<Error<"FILTER", $Input>>]>
>;
export function filter<
  $Input,
  $TrueResult extends Result,
  $FalseResult extends Result,
>(
  predicate: Predicate<$Input>,
  truePipeable: PipeableSync<$Input, $TrueResult>,
  falsePipeable: PipeableSync<$Input, $FalseResult>,
): PipeableSync<$Input, Either<[$TrueResult, $FalseResult]>>;
/**
 * Sync pipeable which runs either `truePipeable` or `falsePipeable` based on return value of `predicate`.
 *
 * By default `truePipeable` returns `Ok<$Input>` and `falsePipeable` returns `Err<Error<"FILTER", $Input>>`.
 *
 * @example
 * filter((v: number) => !(v % 2));
 *
 * filter(
 *   (v: number) => !(v % 2),
 *   () => ok("even"),
 * );
 *
 * filter(
 *   (v: number) => !(v % 2),
 *   () => ok("even"),
 *   () => ok("odd"),
 * );
 **/
export function filter<
  $Input,
  $TrueResult extends Result,
  $FalseResult extends Result,
>(
  predicate: Predicate<$Input>,
  truePipeable: PipeableSync<$Input, $TrueResult> = ((value: $Input) =>
    ok(value)) as PipeableSync<$Input, $TrueResult>,
  falsePipeable: PipeableSync<$Input, $FalseResult> = ((value: $Input) =>
    err(error("FILTER")(value))) as PipeableSync<$Input, $FalseResult>,
) {
  return (value: $Input) =>
    predicate(value) ? truePipeable(value) : falsePipeable(value);
}

export const filterSync = filter;
