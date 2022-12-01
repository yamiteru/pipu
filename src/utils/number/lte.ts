import { condition } from "../other";

export const lte = (number: number) => 
	condition<number>((v) => v <= number);
