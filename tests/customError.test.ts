import { condition, customError } from "../src";

describe("wrap", () => {
  it("should wrap pipeable with a custom error where previosu error is valid", () => {
    try {
      customError(
        condition((v: number) => v === 0),
        (value, error) => ({ double: value * 2, error }),
      )(1);
    } catch (e) {
      expect(e).toEqual({
        double: 2,
        error: {
          reason: "CONDITION",
          value: 1,
        },
      });
    }
  });

  it("should wrap pipeable with a custom error where previosu error is not valid", () => {
    try {
      customError(
        (v: number) => {
          if (v === 0) {
            return v;
          }

          throw new Error("Invalid error");
        },
        (value, error) => ({ double: value * 2, error }),
      )(1);
    } catch (e) {
      expect(e).toEqual({
        double: 2,
        error: {},
      });
    }
  });
});
