import { Maybe } from "../../types";
import { gt } from "./gt";

describe.each<[number, number, Maybe<number>]>([
	[5, 2, undefined],
	[0, 5, 5],
	[-25, -10, -10],
	[0, 0, undefined]
])("number/gt(%i)(%i) => %i", (a, b, expected) => {
	const gtA = gt(a);
	
	test(`Returns ${expected}`, () => {
		expect(gtA(b)).toBe(expected);	
	});
});
