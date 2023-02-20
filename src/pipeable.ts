import type {
  Either,
  Error,
  InferPipeableArrayError,
  InferPipeableArrayInput,
  InferPipeableArrayOk,
  Pipeable,
  PipeableAny,
  Predicate,
  Result,
  ResultAny,
  ResultErr,
  ResultOk,
} from "./types";
import { err, getErr, isErr, isOk, ok, pipeError } from "./utils";

export function filter<Input>(
  predicate: Predicate<Input>,
): Pipeable<Input, Result<Input, Error<"CONDITION", Input>>> {
  return (value) => {
    if (!predicate(value)) {
      return err(pipeError("CONDITION", value));
    }

    return ok(value);
  };
}

export function map<Input, Output>(
  fn: (value: Input) => Output,
): Pipeable<Input, Result<Output, Error>> {
  return (value) => {
    return ok(fn(value));
  };
}

export function ifElse<
  Input,
  TrueResult extends ResultAny,
  FalseResult extends ResultAny,
>(
  predicate: Predicate<Input>,
  trueBranch: Pipeable<Input, TrueResult>,
  falseBranch: Pipeable<Input, FalseResult>,
): Pipeable<Input, Either<TrueResult, FalseResult>> {
  return (value) => {
    if (predicate(value)) {
      return trueBranch(value);
    }

    return falseBranch(value);
  };
}

export function and<Pipeables extends PipeableAny[]>(
  ...pipeables: Pipeables
): Pipeable<
  InferPipeableArrayInput<Pipeables>,
  Either<
    InferPipeableArrayError<Pipeables>,
    ResultOk<InferPipeableArrayInput<Pipeables>>
  >
> {
  const length = pipeables.length;

  return (value) => {
    for (let i = 0; i < length; ++i) {
      const result = pipeables[i](value);

      if (isErr(result)) {
        return result as InferPipeableArrayError<Pipeables>;
      }
    }

    return ok(value);
  };
}

export function or<Pipeables extends PipeableAny[]>(
  ...pipeables: Pipeables
): Pipeable<
  InferPipeableArrayInput<Pipeables>,
  Either<
    InferPipeableArrayOk<Pipeables>,
    ResultErr<Error<"OR", InferPipeableArrayInput<Pipeables>>>
  >
> {
  const length = pipeables.length;

  return (value) => {
    for (let i = 0; i < length; ++i) {
      const result = pipeables[i](value);

      if (isOk(result)) {
        return result as InferPipeableArrayOk<Pipeables>;
      }
    }

    return err(pipeError("OR", value));
  };
}

export function customError<
  Input,
  Output,
  InputError extends Error,
  OutputError extends Error,
>(
  pipeable: Pipeable<Input, Result<Output, InputError>>,
  error: (value: Input, error: InputError) => OutputError,
): Pipeable<Input, Either<ResultOk<Output>, ResultErr<OutputError>>> {
  return (value) => {
    const result = pipeable(value);

    if (isErr(result)) {
      return err(error(value, getErr(result)));
    }

    return result as ResultOk<Output>;
  };
}
