import { getErr, getOk, isErr, isOk } from "elfs";
import { error, filter, errorTuple } from "../src";

describe("error", () => {
  const isEven = error(
    filter((v: number) => !(v % 2)),
    (value) => errorTuple("TEST", value),
  );

  it("should return Ok when child returns Ok", () => {
    const result = isEven(2);

    expect(isOk(result)).toBe(true);
    expect(getOk(result)).toBe(2);
  });

  it("should return custom Error when child returns Error", () => {
    const result = isEven(1);

    expect(isErr(result)).toBe(true);
    expect(getErr(result)).toEqual(errorTuple("TEST", 1));
  });
});
