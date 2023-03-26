import { getErr, getOk, isErr, isOk } from "elfs";
import { error } from "../src";
import { wrap, filter } from "../src/sync";

describe("wrap", () => {
  const isEven = wrap(
    filter((v: number) => !(v % 2)),
    error("TEST"),
  );

  it("should return Ok when child returns Ok", () => {
    const result = isEven(2);

    expect(isOk(result)).toBe(true);
    expect(getOk(result)).toBe(2);
  });

  it("should return custom Error when child returns Error", () => {
    const result = isEven(1);

    expect(isErr(result)).toBe(true);
    expect(getErr(result)).toEqual(error("TEST")(1));
  });
});
