import { neq } from "./neq";

const CASES: [unknown, unknown, unknown][] = [
	[1, 1, undefined],
	[1, 0, 0],
	[0, true, true],
	["a", "a", undefined],
	[[1], [1], [1]]
];

describe("other/neq", () => {
	CASES.forEach(([a, b, expected]) => {
		it(`should return "${expected}" on input ${a} and ${b}`, () => {
			expect(neq(a)(b)).toStrictEqual(expected);
		});
	});	
});
