import { increment } from "./increment";

describe.each<[number, number]>([
	[1, 2],
	[2, 3],
	[10, 11],
	[-10, -9]
])("number/increment(%i) => %i", (value, expected) => {
	test(`returns ${expected}`, () => {
		expect(increment(value)).toBe(expected);
	});	
});
