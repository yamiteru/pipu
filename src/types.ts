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
 * A general function which can be put inside a `pipe`.
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

/**
 * Infer input of `Pipeable`.
 * */
export type InferPipeableInput<$Pipeable extends Pipeable> =
  $Pipeable extends Pipeable<infer $Input, any> ? $Input : never;

/**
 * Infer inputs of array of `Pipeable`s.
 * */
export type InferPipeableArrayInput<$Pipeables extends Pipeable[]> = {
  [$Key in keyof $Pipeables]: InferPipeableInput<$Pipeables[$Key]>;
}[number];

/**
 * Infer `Error` of `Pipeable`.
 * */
export type InferPipeableError<$Pipeable extends Pipeable> =
  $Pipeable extends Pipeable<any, infer $Result>
    ? $Result extends ResultErr<infer $Err>
      ? ResultErr<$Err>
      : never
    : never;

/**
 * Infer `Error`s of array of `Pipeable`s.
 * */
export type InferPipeableArrayError<$Pipeables extends Pipeable[]> = {
  [$Key in keyof $Pipeables]: InferPipeableError<$Pipeables[$Key]>;
}[number];

/**
 * Infer `Ok` of `Pipeable`.
 * */
export type InferPipeableOk<$Pipeable extends Pipeable> =
  $Pipeable extends Pipeable<any, infer $Result>
    ? $Result extends ResultOk<infer $Ok>
      ? ResultOk<$Ok>
      : never
    : never;

/**
 * Infer `Ok`s of array of `Pipeable`s.
 * */
export type InferPipeableArrayOk<$Pipeables extends Pipeable[]> = {
  [$Key in keyof $Pipeables]: InferPipeableOk<$Pipeables[$Key]>;
}[number];
