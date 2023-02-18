import { tryCatch } from "../src";

describe("tryCatch", () => {
  const _tryCatch = tryCatch(
    (v: number) => {
      if (v === 0) return "zero";

      throw Error("ignored error");
    },
    () => "!zero",
  );

  it("should pass through when no error is encountered", () => {
    expect(_tryCatch(0)).toBe("zero");
  });

  it("should catch error and execute the catch pipeable", () => {
    expect(_tryCatch(1)).toBe("!zero");
  });
});
