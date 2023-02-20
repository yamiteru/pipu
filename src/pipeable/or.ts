import { Either, ResultErr, err, isOk } from "elfs";
import {
  Error,
  InferPipeableArrayInput,
  InferPipeableArrayOk,
  Pipeable,
} from "../types";
import { errorTuple } from "../utils";

export function or<$Pipeables extends Pipeable[]>(
  ...pipeables: $Pipeables
): Pipeable<
  InferPipeableArrayInput<$Pipeables>,
  Either<
    [
      InferPipeableArrayOk<$Pipeables>,
      ResultErr<Error<"OR", InferPipeableArrayInput<$Pipeables>>>,
    ]
  >
> {
  const length = pipeables.length;

  return (value) => {
    for (let i = 0; i < length; ++i) {
      const result = pipeables[i](value);

      if (isOk(result)) {
        return result as InferPipeableArrayOk<$Pipeables>;
      }
    }

    return err(errorTuple("OR", value));
  };
}
