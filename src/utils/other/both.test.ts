import { both } from "./both";

const CASES: [number, unknown][] = [
	[1, 1],
	[420, undefined],
	[-10, undefined],
	[69, 69]
];

const isAlive = both<number>(
	(v) => v >= 0,
	(v) => v <= 150
);

describe("other/both", () => {
	CASES.forEach(([value, expected]) => {
		it(`should return "${expected}" on input ${value}`, () => {
			expect(isAlive(value)).toBe(expected);
		});
	});
});
