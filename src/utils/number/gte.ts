import { condition } from "../other";

export const gte = (number: number) => 
	condition<number>((v) => v >= number);
