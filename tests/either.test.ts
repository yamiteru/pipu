import { either, condition } from "../src";

describe("either", () => {
  const _either = either(
    condition((v: number) => v === 1),
    condition((v) => v === 2),
  );

  it("should return value if at least one pipeable does not throw", () => {
    expect(_either(1)).toBe(1);
    expect(_either(2)).toBe(2);
  });

  it("should throw if all pipeables throw", () => {
    expect(() => _either(3)).toThrow();
  });
});
