import { condition } from "../src";

describe("condition", () => {
  const _condition = condition((v: number) => !(v % 2));

  it("should return input value if condition returns true", () => {
    expect(_condition(2)).toBe(2);
  });

  it("should throw if condition returns false", () => {
    expect(() => _condition(1)).toThrow();
  });
});
