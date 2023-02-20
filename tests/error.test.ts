import { filter, error, errorTuple } from "../src";

describe("wrap", () => {
  it("should wrap pipeable with a custom error", () => {
    try {
      error(
        filter((v: number) => v === 0),
        (value) => errorTuple("TEST", value),
      )(1);
    } catch (e) {
      expect(e).toEqual(["TEST", 1, {}]);
    }
  });
});
