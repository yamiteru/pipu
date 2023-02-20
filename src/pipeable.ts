import type {
  Either,
  Error,
  InferResultErr,
  InferResultOk,
  Pipeable,
  Predicate,
  Result,
  ResultAny,
  ResultErr,
  ResultOk,
} from "./types";
import { err, getErr, isErr, isOk, ok, pipeError } from "./utils";

export function condition<Input>(predicate: Predicate<Input>) {
  return ((value) => {
    if (!predicate(value)) {
      return err(pipeError("CONDITION", value));
    }

    return ok(value);
  }) satisfies Pipeable<Input, Result<Input, Error>>;
}

export function ifElse<
  Input,
  TrueResult extends ResultAny,
  FalseResult extends ResultAny,
>(
  predicate: Predicate<Input>,
  trueBranch: Pipeable<Input, TrueResult>,
  falseBranch: Pipeable<Input, FalseResult>,
) {
  return ((value) => {
    if (predicate(value)) {
      return trueBranch(value);
    }

    return falseBranch(value);
  }) satisfies Pipeable<Input, Either<TrueResult, FalseResult>>;
}

export function both<
  FirstInput,
  FirstResult extends ResultAny,
  SecondInput,
  SecondResult extends ResultAny,
>(
  firstPipeable: Pipeable<FirstInput, FirstResult>,
  secondPipeable: Pipeable<SecondInput, SecondResult>,
) {
  return ((value) => {
    const first = firstPipeable(value as FirstInput);

    if (isErr(first)) return first;

    const second = secondPipeable(value as SecondInput);

    if (isErr(second)) return second;

    return ok(value);
  }) satisfies Pipeable<
    Either<FirstInput, SecondInput>,
    Either<
      Either<
        ResultErr<InferResultErr<FirstResult>>,
        ResultErr<InferResultErr<SecondResult>>
      >,
      ResultOk<Either<FirstInput, SecondInput>>
    >
  >;
}

export function either<
  FirstInput,
  FirstResult extends ResultAny,
  SecondInput,
  SecondResult extends ResultAny,
>(
  firstPipeable: Pipeable<FirstInput, FirstResult>,
  secondPipeable: Pipeable<SecondInput, SecondResult>,
) {
  return ((value) => {
    const first = firstPipeable(value as never);

    if (isOk(first)) return first;

    const second = secondPipeable(value as never);

    if (isOk(second)) return second;

    return err(pipeError("EITHER", value));
  }) satisfies Pipeable<
    Either<FirstInput, SecondInput>,
    Either<
      Either<
        ResultOk<InferResultOk<FirstResult>>,
        ResultOk<InferResultOk<SecondResult>>
      >,
      ResultErr
    >
  >;
}

export function customError<
  Input,
  InputError extends Error,
  OutputError extends Error,
>(
  pipeable: Pipeable<Input, Result<Input, InputError>>,
  error: (value: Input, error: InputError) => OutputError,
) {
  return ((value) => {
    const result = pipeable(value);

    if (isErr(result)) {
      return err(error(value, getErr(result)));
    }

    return result as ResultOk<Input>;
  }) satisfies Pipeable<Input, Result<Input, OutputError>>;
}
