import { divide } from "./divide";

describe.each<[number, number, number]>([
	[3, 6, 2],
	[6, 3, 0.5],
	[0, 10, Infinity],
	[10, 0, 0]
])("number/divide(%i)(%i) => %i", (a, b, expected) => {
	const divideByA = divide(a);

	test(`Returns ${expected}`, () => {
		expect(divideByA(b)).toBe(expected);
	});
});
