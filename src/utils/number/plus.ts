import { transform } from "../other";

/*
 * Increments curried value by the input value
 */
export const plus = (number: number) => 
	transform<number, number>((v) => v + number);
