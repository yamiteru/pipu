import { ObjectAny, Result, ResultErr, ResultOk } from "elfs";

/**
 * Tuple with reason, value and optional context.
 * */
export type Error<
  $Reason extends string = string,
  $Value = any,
  $Context extends ObjectAny = ObjectAny,
> = [reason: $Reason, value: $Value, context?: $Context];

/**
 * A function which can be put inside a `pipe`.
 * It should return a `Result`.
 * */
export type Pipeable<$Input = any, $Output extends Result = Result> = (
  data: $Input,
) => $Output;

/**
 * Shorthand for `Pipeable<$Input, Result>`.
 * */
export type PipeableInput<$Input> = Pipeable<$Input>;

/**
 * Shorthand for `Pipeable<any, $Output>`.
 * */
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
