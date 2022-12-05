import { plus } from "./plus";

describe.each<[number, number, number]>([
	[5, 1, 6],
	[0, 1, 1],
	[-10, -1, -11]
])("number/plus(%i)(%i) => %i", (a, b, expected) => {
	const plusA = plus(a);
	
	test(`Returns ${expected}`, () => {
		expect(plusA(b)).toBe(expected);		
	});
});
