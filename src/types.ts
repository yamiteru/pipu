export type Either<L, R> = L | R;
export type Maybe<T> = Either<undefined, T>;
export type PipeFn<I, O> = (data: I, id: symbol) => Maybe<O>;
export type PipeReturn<I, O> = (data: I) => Promise<Maybe<O>>;
export type Struct = Record<string | number | symbol, unknown>;
export type Fn<Input, Output> = (value: Input) => Output;
export type Bool = boolean;
