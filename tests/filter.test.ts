import { filter } from "../src";

describe("Filter", () => {
	const condition = filter((v: number) => !(v % 2));

	it("should return input value if condition returns true", () => {
		expect(condition(2)).toBe(2);	
	});

	it("should throw if condition returns false", () => {
		expect(() => condition(1)).toThrow();	
	});
});
