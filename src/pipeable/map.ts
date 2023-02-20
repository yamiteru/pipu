import { Result, ok } from "elfs";
import { Error, Pipeable } from "../types";

export function map<$Input, $Output>(
  fn: (value: $Input) => $Output,
): Pipeable<$Input, Result<$Output, Error>> {
  return (value) => {
    return ok(fn(value));
  };
}
