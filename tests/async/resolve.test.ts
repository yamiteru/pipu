import { getErr, getOk, isErr, isOk } from "elfs";
import { describe, it, expect } from "vitest";
import { error } from "../../src";
import { resolve } from "../../src/async";

describe("async/resolve", () => {
  const testResolve = resolve(
    (value: number) =>
      new Promise<number>((res, rej) => (!(value % 2) ? res(value) : rej())),
  );

  it("should return Ok result", async () => {
    const result = await testResolve(2);

    expect(isOk(result)).toBe(true);
    expect(getOk(result)).toBe(2);
  });

  it("should return Err result", async () => {
    const result = await testResolve(1);

    expect(isErr(result)).toBe(true);
    expect(getErr(result)).toEqual(error("PROMISE")(1));
  });
});
