import { describe, expect, it } from "vitest";
import { getOk, isErr, isOk } from "elfs";
import { filter, map, parse } from "../../src/sync";

describe("sync/parse", () => {
  const double = map((v: number) => v * 2);
  const even = filter((v: number) => !(v % 2));

  it("should return Ok", () => {
    const result = parse(double, 1);

    expect(isOk(result)).toBe(true);
    expect(getOk(result)).toBe(2);
  });

  it("should return Err", () => {
    const result = parse(even, 1);

    expect(isErr(result)).toBe(true);
  });
});
