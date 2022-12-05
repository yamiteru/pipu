import { condition } from "../other";

/* 
 * Compares if curried value is greater or equal than input value
 */
export const gte = (number: number) => 
	condition<number>((v) => v >= number);
