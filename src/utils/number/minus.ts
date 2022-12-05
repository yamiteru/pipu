import { transform } from "../other";

/**
 * Decrements curried value by the input value
 */
export const minus = (number: number) => 
	transform<number, number>((v) => v - (number < 0 
		? -number
		: number)
	);
