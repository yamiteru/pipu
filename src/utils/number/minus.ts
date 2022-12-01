import { transform } from "../other";

export const minus = (number: number) => 
	transform<number, number>((v) => v - number);
