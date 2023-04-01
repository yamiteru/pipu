import { describe, expect, it } from "vitest";
import { getOk, isErr, isOk } from "elfs";
import { or } from "../../src/async";
import { filter } from "../../src/sync";

describe("async/or", () => {
  const isDividableByTwoOrThree = or(
    filter((v: number) => !(v % 2)),
    filter((v: number) => !(v % 3)),
  );

  it("should return Ok if one of the pipeables returns Ok", async () => {
    const result1 = await isDividableByTwoOrThree(2);

    expect(isOk(result1)).toBe(true);
    expect(getOk(result1)).toBe(2);

    const result2 = await isDividableByTwoOrThree(3);

    expect(isOk(result2)).toBe(true);
    expect(getOk(result2)).toBe(3);
  });

  it("should return Err if neither one of the pipeables returns Ok", async () => {
    const result = await isDividableByTwoOrThree(5);

    expect(isErr(result)).toBe(true);
  });
});
