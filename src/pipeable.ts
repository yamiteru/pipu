import { Fn, Predicate, Pipeable, Either, Error } from "./types";
import { error } from "./utils";

export const filter = <
	Input,
	Output = Input
>(
	predicate: Predicate<[Input]>,
	throwError: Pipeable<Input, never> = error("FILTER")
): Pipeable<Input, Output> => (value) => {
	if(!predicate(value)) throwError(value);
	return value as unknown as Output;
};

export const and = <Input, Outputs extends unknown[]>(...pipeables: {
	[Key in keyof Outputs]: Pipeable<Input, Outputs[Key]>;
}) => filter<Input, Outputs[number]>((value) => {
	for(let i = 0; i < pipeables.length; ++i) {
		pipeables[i](value);
	}

	return true;
});

export const or = <Input, Outputs extends unknown[]>(...pipeables: {
	[Key in keyof Outputs]: Pipeable<Input, Outputs[Key]>;
}) => filter<Input, Outputs[number]>(
	(value) => {
		let latestError: Either<Error, null> = null;

		for(let i = 0; i < pipeables.length; ++i) {
			try {
				pipeables[i](value);
				return true;
			} catch(e) {
				latestError = e as never;
			}
		}

		throw latestError;
	}
);

export const apply = <
	Input extends unknown[],
	Output
>(fn: Fn<Input, Output>) => fn;

export const condition = <
	Input, 
	Output
>(conditions: [Predicate<[Input]>, Fn<[Input], Output>][]) => ((value) => {
	for(let i = 0; i < conditions.length; ++i) {
		const condition = conditions[i];

		if(condition[0](value)) {
			return condition[1](value);	
		}
	}
	
	error("CONDITION");
}) as Pipeable<Input, Output>;

export const match = <
	Input extends string | number | symbol,
	Output
>(options: Record<Input, Fn<[Input], Output>>): Pipeable<Input, Output> => (value) => {
	return options[value](value);		
};
