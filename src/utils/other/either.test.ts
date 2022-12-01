import { either } from "./either";

const CASES: [number, unknown][] = [
	[1, undefined],
	[421, undefined],
	[420, 420],
	[69, 69]
];

const isMemeNumber = either<number>(
	(v) => v === 420,
	(v) => v === 69
);

describe("other/either", () => {
	CASES.forEach(([value, expected]) => {
		it(`should return "${expected}" on input ${value}`, () => {
			expect(isMemeNumber(value)).toBe(expected);
		});
	});
});
