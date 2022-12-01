import { ifElse } from "./ifElse";

const CASES: [number, string][] = [
	[2, "divisible by 2"],
	[3, "not divisible by 2"],
	[5, "not divisible by 2"],
	[100, "divisible by 2"]
];

const isDivisibleByTwo = ifElse<number, string>(
	(v) => !(v%2),
	() => "divisible by 2",
	() => "not divisible by 2"
);

describe("other/ifElse", () => {
	CASES.forEach(([value, expected]) => {
		it(`should return "${expected}" on input ${value}`, () => {
			expect(isDivisibleByTwo(value)).toBe(expected);
		});
	});
});
