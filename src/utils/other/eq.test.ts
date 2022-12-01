import { eq } from "./eq";

const CASES: [unknown, unknown, unknown][] = [
	[1, 1, 1],
	[1, 0, undefined],
	[0, true, undefined],
	["a", "a", "a"],
	[[1], [1], undefined]
];

describe("other/eq", () => {
	CASES.forEach(([a, b, expected]) => {
		it(`should return "${expected}" on input ${a} and ${b}`, () => {
			expect(eq(a)(b)).toBe(expected);
		});
	});	
});
