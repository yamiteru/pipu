import { Error, Pipeable, PipeableAny, Result } from "./types";
import { getOk, isErr, ok } from "./utils";

export function pipe<A, B>(
  ab: Pipeable<A, Result<B, Error>>,
): Pipeable<A, Result<B, Error>>;
export function pipe<A, B, C>(
  ab: Pipeable<A, Result<B, Error>>,
  bc: Pipeable<B, Result<C, Error>>,
): Pipeable<A, Result<C, Error>>;
export function pipe<A, B, C, D>(
  ab: Pipeable<A, Result<B, Error>>,
  bc: Pipeable<B, Result<C, Error>>,
  cd: Pipeable<C, Result<D, Error>>,
): Pipeable<A, Result<D, Error>>;
/*
  The provided functions are executed in sequence where the return value
  from the last executed function is passed into the next function.

  Functions can stop function execution and force the pipe to
  prematurely stop execution by throwing.

  The maximum number of functions passed into a pipe is 24.
  This is caused by TypeScript's inference limitations.

  @param fs - List of functions that return T

  @example
  ```ts
  const doubleEvenNumbersPipe = pipe(
    condition((v: number) => !(v%2)),
    (v) => v * 2,
  );
  ```
*/
export function pipe(...fs: PipeableAny[]) {
  const length = fs.length;

  return (value: unknown, id = Symbol()) => {
    let latest = value;

    for (let i = 0; i < length; ++i) {
      const result = fs[i](latest, id);

      if (isErr(result)) {
        return result;
      }

      latest = getOk(result);
    }

    return ok(latest);
  };
}
