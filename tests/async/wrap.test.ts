import { describe, expect, it } from "vitest";
import { getErr, getOk, isErr, isOk } from "elfs";
import { error } from "../../src";
import { wrap } from "../../src/async";
import { filter } from "../../src/sync";

describe("async/wrap", () => {
  const isEven = wrap(
    filter((v: number) => !(v % 2)),
    error("TEST"),
  );

  it("should return Ok when child returns Ok", async () => {
    const result = await isEven(2);

    expect(isOk(result)).toBe(true);
    expect(getOk(result)).toBe(2);
  });

  it("should return custom Error when child returns Error", async () => {
    const result = await isEven(1);

    expect(isErr(result)).toBe(true);
    expect(getErr(result)).toEqual(error("TEST")(1));
  });
});
