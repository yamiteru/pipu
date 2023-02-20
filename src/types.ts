import { ObjectAny, Result, ResultErr, ResultOk } from "elfs";

export type Error<
  $Reason extends string = string,
  $Value = any,
  $Context extends ObjectAny = ObjectAny,
> = [reason: $Reason, value: $Value, context?: $Context];

export type Pipeable<$Input = any, $Output extends Result = Result> = (
  data: $Input,
  id?: symbol,
) => $Output;

export type PipeableInput<$Input> = Pipeable<$Input>;

export type PipeableOutput<$Output extends Result> = Pipeable<any, $Output>;

export type InferPipeableInput<$Pipeable extends Pipeable> =
  $Pipeable extends Pipeable<infer $Input, any> ? $Input : never;

export type InferPipeableArrayInput<$Pipeables extends Pipeable[]> = {
  [$Key in keyof $Pipeables]: InferPipeableInput<$Pipeables[$Key]>;
}[number];

export type InferPipeableError<$Pipeable extends Pipeable> =
  $Pipeable extends Pipeable<any, infer $Result>
    ? $Result extends ResultErr<infer $Err>
      ? ResultErr<$Err>
      : never
    : never;

export type InferPipeableArrayError<$Pipeables extends Pipeable[]> = {
  [$Key in keyof $Pipeables]: InferPipeableError<$Pipeables[$Key]>;
}[number];

export type InferPipeableOk<$Pipeable extends Pipeable> =
  $Pipeable extends Pipeable<any, infer $Result>
    ? $Result extends ResultOk<infer $Ok>
      ? ResultOk<$Ok>
      : never
    : never;

export type InferPipeableArrayOk<$Pipeables extends Pipeable[]> = {
  [$Key in keyof $Pipeables]: InferPipeableOk<$Pipeables[$Key]>;
}[number];
