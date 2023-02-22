import { ObjectAny, Fn } from "elfs";
import { Error } from "./types";

/**
 * Returns function which dynamically creates error tuple based on value and potential sub-error.
 * It should mainly be used in `wrap` function as a second parameter.
 * */
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
