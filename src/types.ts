export type ObjectAny = Record<string, any>;

export type Predicate<Input> = (value: Input) => boolean;

export type PredicateAny = Predicate<any>;

export type Pipeable<Input, Output> = (data: Input, id?: symbol) => Output;

export type PipeableAny = Pipeable<any, any>;

export type PipeableInput<Input> = Pipeable<Input, any>;

export type PipeableOutput<Output> = Pipeable<any, Output>;

export type InferPipeableInput<Type extends PipeableAny> =
  Type extends PipeableInput<infer Input> ? Input : never;

export type InferPipeableInputs<Type extends PipeableAny[]> = {
  [Key in keyof Type]: InferPipeableInput<Type[Key]>;
}[number];

export type InferOptionInput<Type extends [PredicateAny, PipeableAny]> =
  Type extends [Predicate<infer Input>, PipeableAny] ? Input : never;

export type InferOptionInputs<Type extends [PredicateAny, PipeableAny][]> = {
  [Key in keyof Type]: InferOptionInput<Type[Key]>;
}[number];

export type InferOptionOutput<Type extends [PredicateAny, PipeableAny]> =
  Type extends [PredicateAny, PipeableOutput<infer Output>] ? Output : never;

export type InferOptionOutputs<Type extends [PredicateAny, PipeableAny][]> = {
  [Key in keyof Type]: InferOptionOutput<Type[Key]>;
}[number];
