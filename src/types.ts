export type Pipeable<Input, Output> = (data: Input, id?: symbol) => Output;

export type Predicate<Input> = (value: Input) => boolean;
