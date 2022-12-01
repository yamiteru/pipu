import { toString } from "./toString";

const CASES: [unknown, string][] = [
	[1, "1"],
	["a", "a"],
	[[1, 2], "1,2"],
	[{a: 1}, "[object Object]"]
];

describe("other/toString", () => {
	CASES.forEach(([value, expected]) => {
		it(`should return "${expected}" on input ${value}`, () => {
			expect(toString(value)).toBe(expected);
		});
	});
});
