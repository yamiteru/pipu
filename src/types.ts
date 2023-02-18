export type ObjectAny = Record<string, any>;

export type Predicate<Input> = (value: Input) => boolean;

export type PredicateAny = Predicate<any>;

export type Pipeable<Input, Output> = (data: Input, id?: symbol) => Output;

export type PipeableAny = Pipeable<any, any>;

export type PipeableInput<Input> = Pipeable<Input, any>;

export type PipeableOutput<Output> = Pipeable<any, Output>;
