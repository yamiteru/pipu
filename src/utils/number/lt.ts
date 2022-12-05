import { condition } from "../other";

/* 
 * Compares if curried value is less than input value
 */
export const lt = (number: number) => 
	condition<number>((v) => v < number);
