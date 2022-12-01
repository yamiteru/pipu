import { condition } from "../other";

export const lt = (number: number) => 
	condition<number>((v) => v < number);
