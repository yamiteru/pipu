export type Either<Left, Right> = Left | Right;

export type Pipeable<Input, Output> = (data: Input, id?: symbol) => Output;

export type Fn<
	Input extends unknown[], 
	Output
> = (...props: Input) => Output;

export type Predicate<
	Input extends unknown[]
> = Fn<Input, boolean>;

export type Error = {
	reason: string;
	value: unknown;
	context: Record<string, unknown>;
};
