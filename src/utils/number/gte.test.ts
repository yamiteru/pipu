import { Maybe } from "../../types";
import { gte } from "./gte";

describe.each<[number, number, Maybe<number>]>([
	[5, 2, undefined],
	[0, 5, 5],
	[-25, -10, -10],
	[0, 0, 0]
])("number/gte(%i)(%i) => %i", (a, b, expected) => {
	const gteA = gte(a);
	
	test(`Returns ${expected}`, () => {
		expect(gteA(b)).toBe(expected);	
	});
});
