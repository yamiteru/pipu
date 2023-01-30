import { Predicate, Pipeable, Either, Error } from "./types";
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
