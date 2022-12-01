import { transform } from "./transform";

const doubleToString = transform<number, string>(
	(v) => `${v*2}`
);

const CASES: [number, string][] = [
	[1, "2"],
	[2, "4"],
	[3, "6"],
	[4, "8"]
];

describe("other/transform", () => {
	CASES.forEach(([value, expected]) => {
		it(`should return ${expected} on input ${value}`, () => {
			expect(doubleToString(value)).toBe(expected);	
		});
	});
});
