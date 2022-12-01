import { condition } from "../other";

export const gt = (number: number) => 
	condition<number>((v) => v > number);
