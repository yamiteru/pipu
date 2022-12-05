import { transform } from "../other";

/**
 * Divides curried value by the first value
 */
export const divide = (number: number) => 
	transform<number, number>((v) => v / number);
