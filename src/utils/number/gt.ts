import { condition } from "../other";

/**
 * Compares if curried value is greater than input value
 */
export const gt = (number: number) => 
	condition<number>((v) => v > number);
