import { Maybe } from "../../types";
import { lte } from "./lte";

describe.each<[number, number, Maybe<number>]>([
	[5, 2, 2],
	[0, 5, undefined],
	[-25, -10, undefined],
	[0, 0, 0]
])("number/lte(%i)(%i) => %i", (a, b, expected) => {
	const lteA = lte(a);
	
	test(`Returns ${expected}`, () => {
		expect(lteA(b)).toBe(expected);	
	});
});
