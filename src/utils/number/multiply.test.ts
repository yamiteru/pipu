import { multiply } from "./multiply";

describe.each<[number, number, number]>([
	[1, 1, 1],
	[3, 2, 6],
	[-2, 3, -6],
	[0, 2, 0],
	[Infinity, 2, Infinity]
])("number/multiply(%i)(%i) => %i", (a, b, expected) => {
	const multiplyA = multiply(a);
	
	test(`Returns ${expected}`, () => {
		expect(multiplyA(b)).toBe(expected);
	});
});
