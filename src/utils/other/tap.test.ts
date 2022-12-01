import { tap } from "./tap";

const CASES: unknown[] = [
	1,
	"a",
	[1, 2],
	{ a:1 }
];

describe("other/tap", () => {
	CASES.forEach((value) => {
		it(`expect "${value}" to be passed unchanged and function to be called`, () => {
			const fn = jest.fn();
			const testTap = tap(fn);	
			
			expect(testTap(value)).toBe(value);
			expect(fn).toHaveBeenCalledTimes(1);
		});
	});
});
