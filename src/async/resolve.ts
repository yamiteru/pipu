import { err, ok, Result } from "elfs";
import { Error, PipeableAsync } from "../types";
import { error } from "../utils";

/**
 * Async pipeable which tries to resolve a promise and return `ResultOk`.
 *
 * If the promise throws an error it returns `ResultErr`.
 *
 * @example
 * // PipeableAsync<number, Result<number, Error<"PROMISE", number>>>
 * const getUsersByAge = and(
 *   filter((age: number) => age > 18),
 *   resolve((age) => api.getUsersByAge(age)),
 * );
 **/
export function resolve<$Input, $Result>(
  fn: (value: $Input) => Promise<$Result>,
): PipeableAsync<
  $Input,
  Result<$Result, Error<"PROMISE", $Input, { error: unknown }>>
> {
  return async (value: $Input) => {
    try {
      return ok(await fn(value));
    } catch (e) {
      return err(
        error("PROMISE", () => ({ error: e }))(value) as Error<
          "PROMISE",
          $Input,
          { error: unknown }
        >,
      );
    }
  };
}

export const resolveAsync = resolve;
