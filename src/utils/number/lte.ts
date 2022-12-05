import { condition } from "../other";

/** 
 * Compares if curried value is less or equal than input value
 */
export const lte = (number: number) => 
	condition<number>((v) => v <= number);
