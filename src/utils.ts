import { ObjectAny, Fn } from "elfs";
import { Error } from "./types";

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
