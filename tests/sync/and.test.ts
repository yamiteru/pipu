import { describe, expect, it } from "vitest";
import { err, getErr, getOk, isErr, isOk, ok } from "elfs";
import { and } from "../../src/sync";
import { error } from "../../src";

describe("sync/and", () => {
  it("should execute all methods and return Ok", () => {
    const testPipe = and(
      (v: number) => ok(v * 2),
      (v) => ok(`${v}`),
    );

    const resultOk = testPipe(1);

    expect(isOk(resultOk)).toBe(true);
    expect(getOk(resultOk)).toBe("2");
  });

  it("should stop execution and return Error", () => {
    const testPipe = and(
      (v: number) => (!(v % 2) ? ok(v) : err(error("TEST")(v))),
      (v) => ok(`${v}`),
    );

    const resultErr = testPipe(1);

    expect(isErr(resultErr)).toBe(true);
    expect(getErr(resultErr)).toEqual(error("TEST")(1));
  });
});
