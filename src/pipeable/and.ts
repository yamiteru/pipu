import { Either, ResultOk, isErr, ok } from "elfs";
import {
  InferPipeableArrayError,
  InferPipeableArrayInput,
  Pipeable,
} from "../types";

export function and<$Pipeables extends Pipeable[]>(
  ...pipeables: $Pipeables
): Pipeable<
  InferPipeableArrayInput<$Pipeables>,
  Either<
    [
      InferPipeableArrayError<$Pipeables>,
      ResultOk<InferPipeableArrayInput<$Pipeables>>,
    ]
  >
> {
  const length = pipeables.length;

  return (value) => {
    for (let i = 0; i < length; ++i) {
      const result = pipeables[i](value);

      if (isErr(result)) {
        return result as InferPipeableArrayError<$Pipeables>;
      }
    }

    return ok(value);
  };
}
