import { NONE } from "./utils";

export type ObjectAny = Record<string, any>;

export type Error<
  Reason extends string = string,
  Value = any,
  Context extends ObjectAny = ObjectAny,
> = {
  reason: Reason;
  value: Value;
} & Context;

export type Predicate<Input> = (value: Input) => boolean;

export type PredicateAny = Predicate<any>;

export type Pipeable<Input, Output extends ResultAny> = (
  data: Input,
  id?: symbol,
) => Output;

export type PipeableAny = Pipeable<any, any>;

export type PipeableInput<Input> = Pipeable<Input, any>;

export type PipeableOutput<Output extends ResultAny> = Pipeable<any, Output>;

export type InferPipeableInput<P extends PipeableAny> = P extends Pipeable<
  infer Input,
  any
>
  ? Input
  : never;

export type InferPipeableArrayInput<Pipeables extends PipeableAny[]> = {
  [Key in keyof Pipeables]: InferPipeableInput<Pipeables[Key]>;
}[number];

export type InferPipeableError<P extends PipeableAny> = P extends Pipeable<
  any,
  infer Result
>
  ? Result extends ResultErr<infer Err>
    ? ResultErr<Err>
    : never
  : never;

export type InferPipeableArrayError<Pipeables extends PipeableAny[]> = {
  [Key in keyof Pipeables]: InferPipeableError<Pipeables[Key]>;
}[number];

export type InferPipeableOk<P extends PipeableAny> = P extends Pipeable<
  any,
  infer Result
>
  ? Result extends ResultOk<infer Ok>
    ? ResultOk<Ok>
    : never
  : never;

export type InferPipeableArrayOk<Pipeables extends PipeableAny[]> = {
  [Key in keyof Pipeables]: InferPipeableOk<Pipeables[Key]>;
}[number];

export type Either<Left, Right> = Left | Right;

export type Pattern<Input, Output> = [
  Predicate<Input>,
  (value: Input) => Output,
];

export type None = typeof NONE;

export type ResultOk<Ok = any> = [ok: Ok, err: None];

export type ResultErr<Err = any> = [ok: None, err: Err];

export type Result<Ok, Err> = Either<ResultOk<Ok>, ResultErr<Err>>;

export type ResultAny = Result<any, any>;

export type InferResultOk<R extends ResultAny> = R extends ResultOk<infer Ok>
  ? Ok
  : never;

export type InferResultErr<R extends ResultAny> = R extends ResultErr<infer Err>
  ? Err
  : never;
