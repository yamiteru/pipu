import { match } from "../src";

describe("match", () => {
  const matchNumber = match<number, ["one", "two"]>([
    [(v) => v === 1, () => "one"],
    [(v) => v === 2, () => "two"],
  ]);

  it("should return option whose predicate is true", () => {
    expect(matchNumber(1)).toBe("one");
    expect(matchNumber(2)).toBe("two");
  });

  it("should throw when none of the predicates returns true", () => {
    expect(() => matchNumber(3)).toThrow();
  });
});
