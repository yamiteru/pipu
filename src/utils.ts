import type { Either, Fn, Pipeable } from "./types";

export const error = <Input>(
	reason: string, 
	context: Either<
		Fn<[Input], Record<string, unknown>>, 
		Record<string, unknown>
	> = {}
): Pipeable<Input, never> => (value) => {
	throw {
		reason,
		value,
		context: typeof context === "function" 
			? context(value)
			: context
	};
};
