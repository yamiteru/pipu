import { Result, getOk, isErr, ok } from "elfs";
import { Error, Pipeable } from "./types";

// TODO: generate more types
export function pipe<A, B1, B2 extends Error>(
  ab: Pipeable<A, Result<B1, B2>>,
): Pipeable<A, Result<B1, B2>>;
export function pipe<A, B1, B2 extends Error, C1, C2 extends Error>(
  ab: Pipeable<A, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
): Pipeable<A, Result<C1, B2 | C2>>;
export function pipe<
  A,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
>(
  ab: Pipeable<A, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
): Pipeable<A, Result<D1, B2 | C2 | D2>>;
export function pipe<
  A,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
  E1,
  E2 extends Error,
>(
  ab: Pipeable<A, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
  de: Pipeable<D1, Result<E1, E2>>,
): Pipeable<A, Result<E1, B2 | C2 | D2 | E2>>;
export function pipe<
  A,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
  E1,
  E2 extends Error,
  F1,
  F2 extends Error,
>(
  ab: Pipeable<A, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
  de: Pipeable<D1, Result<E1, E2>>,
  ef: Pipeable<E1, Result<F1, F2>>,
): Pipeable<A, Result<F1, B2 | C2 | D2 | E2 | F2>>;
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
    filter((v: number) => !(v%2)),
    map((v) => v * 2),
  );
  ```
*/
export function pipe(...fs: Pipeable[]) {
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
