import { Maybe } from "../../types";
import { and } from "./and";

const CASES: [number, Maybe<number>][] = [
	[-10, undefined],
	[0, 0],
	[169, undefined],
	[25, 25]
];

const isAlive = and<number>(
	(v) => v >= 0,
	(v) => v <= 150
);

describe("other/and", () => {
	CASES.forEach(([value, expected]) => {
		it(`should return "${expected}" with input ${value}`, () => {
			expect(isAlive(value)).toBe(expected);
		});
	});	
});
