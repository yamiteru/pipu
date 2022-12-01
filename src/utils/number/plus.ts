import { transform } from "../other";

export const plus = (number: number) => 
	transform<number, number>((v) => v + number);
