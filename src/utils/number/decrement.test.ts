import { decrement } from "./decrement";

describe.each<[number, number]>([
	[1, 0],
	[2, 1],
	[10, 9],
	[-10, -11]
])("number/decrement(%i) => %i", (value, expected) => {
	test(`returns ${expected}`, () => {
		expect(decrement(value)).toBe(expected);
	});	
});
