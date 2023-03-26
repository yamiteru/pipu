import { ObjectAny, Result, ResultErr, ResultOk } from "elfs";

// Error tuple [reason, value, optional context].
export type Error<
  $Reason extends string = string,
  $Value = any,
  $Context extends ObjectAny = ObjectAny,
> = [reason: $Reason, value: $Value, context?: $Context];

// Sync function which can be put inside a `pipe`.
export type PipeableSync<$Input = any, $Output extends Result = Result> = (
  data: $Input,
) => $Output;

// Async function which can be put inside a `pipe`.
export type PipeableAsync<$Input = any, $Output extends Result = Result> = (
  data: $Input,
) => Promise<$Output>;

// A/sync function which can be put inside a `pipe`.
export type Pipeable<$Input = any, $Output extends Result = Result> =
  | PipeableSync<$Input, $Output>
  | PipeableAsync<$Input, $Output>;

// Shorthand for `PipeableSync<$Input, Result>`.
export type PipeableSyncInput<$Input> = PipeableSync<$Input>;

// Shorthand for `PipeableAsync<$Input, Result>`.
export type PipeableAsyncInput<$Input> = PipeableAsync<$Input>;

// Shorthand for `Pipeable<$Input, Result>`.
export type PipeableInput<$Input> = Pipeable<$Input>;

// Shorthand for `PipeableSync<any, $Output>`.
export type PipeableSyncOutput<$Output extends Result> = PipeableSync<
  any,
  $Output
>;

// Shorthand for `PipeableAsync<any, $Output>`.
export type PipeableAsyncOutput<$Output extends Result> = PipeableAsync<
  any,
  $Output
>;

// Shorthand for `Pipeable<any, $Output>`.
export type PipeableOutput<$Output extends Result> = Pipeable<any, $Output>;

// Infers `Input` of `PipeableSync`.
export type InferPipeableSyncInput<$Pipeable extends PipeableSync> =
  $Pipeable extends PipeableSync<infer $Input, any> ? $Input : never;

// Infers `Input` of `PipeableAsync`.
export type InferPipeableAsyncInput<$Pipeable extends PipeableAsync> =
  $Pipeable extends PipeableAsync<infer $Input, any> ? $Input : never;

// Infers `Input` of `Pipeable`.
export type InferPipeableInput<$Pipeable extends Pipeable> =
  $Pipeable extends Pipeable<infer $Input, any> ? $Input : never;

// Infers `Input` of array of `PipeableSync`s.
export type InferPipeableSyncArrayInput<$Pipeables extends PipeableSync[]> = {
  [$Key in keyof $Pipeables]: InferPipeableSyncInput<$Pipeables[$Key]>;
}[number];

// Infers `Input` of array of `PipeableAsync`s.
export type InferPipeableAsyncArrayInput<$Pipeables extends PipeableAsync[]> = {
  [$Key in keyof $Pipeables]: InferPipeableAsyncInput<$Pipeables[$Key]>;
}[number];

// Infers `Input` of array of `Pipeable`s.
export type InferPipeableArrayInput<$Pipeables extends Pipeable[]> = {
  [$Key in keyof $Pipeables]: InferPipeableInput<$Pipeables[$Key]>;
}[number];

// Infers `Error` of `PipeableSync`.
export type InferPipeableSyncError<$Pipeable extends PipeableSync> =
  $Pipeable extends PipeableSync<any, infer $Result>
    ? $Result extends ResultErr<infer $Err>
      ? ResultErr<$Err>
      : never
    : never;

// Infers `Error` of `PipeableAsync`.
export type InferPipeableAsyncError<$Pipeable extends PipeableAsync> =
  $Pipeable extends PipeableAsync<any, infer $Result>
    ? $Result extends ResultErr<infer $Err>
      ? ResultErr<$Err>
      : never
    : never;

// Infers `Error` of `Pipeable`.
export type InferPipeableError<$Pipeable extends Pipeable> =
  $Pipeable extends Pipeable<any, infer $Result>
    ? $Result extends ResultErr<infer $Err>
      ? ResultErr<$Err>
      : never
    : never;

// Infers `Error`s of array of `PipeableSync`s.
export type InferPipeableSyncArrayError<$Pipeables extends PipeableSync[]> = {
  [$Key in keyof $Pipeables]: InferPipeableSyncError<$Pipeables[$Key]>;
}[number];

// Infers `Error`s of array of `PipeableAsync`s.
export type InferPipeableAsyncArrayError<$Pipeables extends PipeableAsync[]> = {
  [$Key in keyof $Pipeables]: InferPipeableAsyncError<$Pipeables[$Key]>;
}[number];

// Infers `Error`s of array of `Pipeable`s.
export type InferPipeableArrayError<$Pipeables extends Pipeable[]> = {
  [$Key in keyof $Pipeables]: InferPipeableError<$Pipeables[$Key]>;
}[number];

// Infers `Ok` of `PipeableSync`.
export type InferPipeableSyncOk<$Pipeable extends PipeableSync> =
  $Pipeable extends PipeableSync<any, infer $Result>
    ? $Result extends ResultOk<infer $Ok>
      ? ResultOk<$Ok>
      : never
    : never;

// Infers `Ok` of `PipeableAsync`.
export type InferPipeableAsyncOk<$Pipeable extends PipeableAsync> =
  $Pipeable extends PipeableAsync<any, infer $Result>
    ? $Result extends ResultOk<infer $Ok>
      ? ResultOk<$Ok>
      : never
    : never;

// Infers `Ok` of `Pipeable`.
export type InferPipeableOk<$Pipeable extends Pipeable> =
  $Pipeable extends Pipeable<any, infer $Result>
    ? $Result extends ResultOk<infer $Ok>
      ? ResultOk<$Ok>
      : never
    : never;

// Infers `Ok`s of array of `PipeableSync`s.
export type InferPipeableSyncArrayOk<$Pipeables extends PipeableSync[]> = {
  [$Key in keyof $Pipeables]: InferPipeableSyncOk<$Pipeables[$Key]>;
}[number];

// Infers `Ok`s of array of `PipeableAsync`s.
export type InferPipeableAsyncArrayOk<$Pipeables extends PipeableAsync[]> = {
  [$Key in keyof $Pipeables]: InferPipeableAsyncOk<$Pipeables[$Key]>;
}[number];

// Infers `Ok`s of array of `Pipeable`s.
export type InferPipeableArrayOk<$Pipeables extends Pipeable[]> = {
  [$Key in keyof $Pipeables]: InferPipeableOk<$Pipeables[$Key]>;
}[number];
