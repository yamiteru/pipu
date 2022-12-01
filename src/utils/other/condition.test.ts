import { condition } from "./condition";

const isEven = condition<number>(
	(v) => !(v%2)
);

const CASES: [number, number | undefined][]= [
	[1, undefined],
	[2, 2],
	[3, undefined],
	[4, 4]
];

describe("other/condition", () => {
	CASES.forEach(([value, expected]) => {
		it(`should return ${expected} on input ${value}`, () => {
			expect(isEven(value)).toBe(expected);
		});
	});
});
