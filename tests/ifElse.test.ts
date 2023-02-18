import { ifElse } from "../src";

describe("ifElse", () => {
  const _ifElse = ifElse(
    (v: number) => !(v % 2),
    () => "even",
    () => "odd",
  );

  it("should return true case if predicate returns true", () => {
    expect(_ifElse(2)).toBe("even");
  });

  it("should return false case if predicate returns false", () => {
    expect(_ifElse(1)).toBe("odd");
  });
});
