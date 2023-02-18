import { both, condition } from "../src";

describe("both", () => {
  const _both = both(
    condition<number>((v) => v > 0),
    condition<number>((v) => v <= 10),
  );

  it("should return value if no pipeable throws", () => {
    expect(_both(2)).toBe(2);
    expect(_both(5)).toBe(5);
  });

  it("should throw if a pipeable throws", () => {
    expect(() => _both(15)).toThrow();
  });
});
