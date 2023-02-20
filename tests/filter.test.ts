import { filter } from "../src";

describe("filter", () => {
  const _filter = filter((v: number) => !(v % 2));

  it("should return input value if condition returns true", () => {
    expect(_filter(2)).toBe(2);
  });

  it("should throw if condition returns false", () => {
    expect(() => _filter(1)).toThrow();
  });
});
