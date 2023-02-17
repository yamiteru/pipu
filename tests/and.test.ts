import { and, filter } from "../src";

describe("and", () => {
  const _and = and(
    filter<number>((v) => v > 0),
    filter<number>((v) => v <= 10),
  );

  it("should return value if no pipeable throws", () => {
    expect(_and(2)).toBe(2);
    expect(_and(5)).toBe(5);
  });

  it("should throw if a pipeable throws", () => {
    expect(() => _and(15)).toThrow();
  });
});
