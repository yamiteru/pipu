import { transform } from "../other";

export const divide = (number: number) => 
	transform<number, number>((v) => v / number);
