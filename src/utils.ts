import { ObjectAny } from "elfs";

export function errorTuple<
  $Reason extends string,
  $Input,
  $Context extends ObjectAny = ObjectAny,
>(reason: $Reason, input: $Input, context?: $Context) {
  return [reason, input, context || {}] as [
    reason: $Reason,
    input: $Input,
    context: $Context,
  ];
}
