import { transform } from "../other";

export const multiply = (number: number) => 
	transform<number, number>((v) => v * number);
