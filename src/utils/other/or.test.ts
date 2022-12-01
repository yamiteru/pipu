import { Maybe } from "../../types";
import { or } from "./or";

const CASES: [string, Maybe<string>][] = [
	["Black tea", undefined],
	["Green tea", "Green tea"],
	["Coffee", undefined],
	["Dark puerh tea", "Dark puerh tea"]
];

const isFavoriteTea = or<string>(
	(v) => v.toLowerCase().includes("puerh"),
	(v) => v.toLowerCase().includes("green")
);

describe("other/or", () => {
	CASES.forEach(([value, expected]) => {
		it(`should return "${expected}" on input ${value}`, () => {
			expect(isFavoriteTea(value)).toBe(expected);
		});
	});	
});
