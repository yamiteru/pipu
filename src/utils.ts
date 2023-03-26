import { ObjectAny, Fn } from "elfs";
import { Error } from "./types";

/**
 * Creates error tuple based on value and potential sub-error.
 * It should mainly be used in `wrap` function as a second parameter.
 * All `Pipeable`s should return error created with this function.
 *
 * @example
 * error("TEST", (value, error) => ({ valueType: typeof value, error }))
 **/
export function error<
  $Reason extends string,
  $Input,
  $Error extends Error,
  $Context extends ObjectAny = ObjectAny,
>(reason: $Reason, context?: Fn<[input: $Input, error: $Error], $Context>) {
  return (input: $Input, error?: $Error) => {
    return [
      reason,
      input,
      context
        ? context(input, error || (["", input] as unknown as $Error))
        : {},
    ] as Error<$Reason, $Input, $Context>;
  };
}
