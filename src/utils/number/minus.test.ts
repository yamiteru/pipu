import { minus } from "./minus";

describe.each<[number, number, number]>([
	[5, 1, -4],
	[0, 1, 1],
	[-10, -1, -11]
])("number/minus(%i)(%i) => %i", (a, b, expected) => {
	const minusA = minus(a);
	
	test(`Returns ${expected}`, () => {
		expect(minusA(b)).toBe(expected);		
	});
});
