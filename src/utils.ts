import { ObjectAny } from "elfs";
import { Error } from "./types";

export function errorTuple<
  $Reason extends string,
  $Input,
  $Context extends ObjectAny = ObjectAny,
>(reason: $Reason, input: $Input, context?: $Context) {
  return [reason, input, context || {}] as Error<$Reason, $Input, $Context>;
}
