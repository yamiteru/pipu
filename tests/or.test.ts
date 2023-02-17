import { or, filter } from "../src";

describe("or", () => {
  const _or = or(
    filter((v: number) => v === 1),
    filter((v) => v === 2),
  );

  it("should return value if at least one pipeable does not throw", () => {
    expect(_or(1)).toBe(1);
    expect(_or(2)).toBe(2);
  });

  it("should throw if all pipeables throw", () => {
    expect(() => _or(3)).toThrow();
  });
});
