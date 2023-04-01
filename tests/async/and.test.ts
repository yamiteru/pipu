import { describe, expect, it } from "vitest";
import { err, getErr, getOk, isErr, isOk, ok } from "elfs";
import { and } from "../../src/async";
import { error } from "../../src";

describe("async/and", () => {
  it("should execute all methods and return Ok", async () => {
    const testPipe = and(
      (v: number) => ok(v * 2),
      (v) => ok(`${v}`),
    );

    const resultOk = await testPipe(1);

    expect(isOk(resultOk)).toBe(true);
    expect(getOk(resultOk)).toBe("2");
  });

  it("should stop execution and return Error", async () => {
    const testPipe = and(
      (v: number) => (!(v % 2) ? ok(v) : err(error("TEST")(v))),
      (v) => ok(`${v}`),
    );

    const resultErr = await testPipe(1);

    expect(isErr(resultErr)).toBe(true);
    expect(getErr(resultErr)).toEqual(error("TEST")(1));
  });
});
