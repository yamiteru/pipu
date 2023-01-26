import { Predicate, Fn, Either } from "./types";

export const NONE = Symbol();
export const DEFAULT = Symbol();

export const isFunction = (value: unknown) => typeof value === "function";

export const ifElse = <
	Input,
	IfOutput,
	ElseOutput	
>(
	predicate: Predicate<[Input]>,
	ifOutput: Either<Fn<[Input], IfOutput>, IfOutput>,
	elseOutput: Either<Fn<[Input], ElseOutput>, ElseOutput>,
) => (value: Input) => predicate(value)
	? isFunction(ifOutput) 
		? (ifOutput as Fn<[Input], IfOutput>)(value)
		: ifOutput as IfOutput
	: isFunction(elseOutput) 
		? (elseOutput as Fn<[Input], ElseOutput>)(value)
		: elseOutput as ElseOutput; 

export const filter = <
	Input,
	Output = typeof NONE
>(
	predicate: Predicate<[Input]>,
	defaultValue?: Either<Fn<[Input], Output>, Output> 
) => ifElse(
	predicate,
	(value) => value,
	(value) => (defaultValue !== undefined
		? isFunction(defaultValue) 
			? (defaultValue as Fn<[Input], Output>)(value)
			: defaultValue as Output
		: NONE) as Output
); 

export const map = <Input, Output>(fn: Fn<[Input], Output>) => fn;

// TODO: Make the types work
export const tap = <Input>(effect: Fn<[Input], void>) => (value: Input) => {
	effect(value);
	return value;
};
