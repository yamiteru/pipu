import { transform } from "../other";

/*
 * Multiply curried value by the first value
 */
export const multiply = (number: number) => 
	transform<number, number>((v) => v * number);
