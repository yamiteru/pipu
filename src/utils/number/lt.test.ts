import { Maybe } from "../../types";
import { lt } from "./lt";

describe.each<[number, number, Maybe<number>]>([
	[5, 2, 2],
	[0, 5, undefined],
	[-25, -10, undefined],
	[0, 0, undefined]
])("number/lt(%i)(%i) => %i", (a, b, expected) => {
	const ltA = lt(a);
	
	test(`Returns ${expected}`, () => {
		expect(ltA(b)).toBe(expected);	
	});
});
