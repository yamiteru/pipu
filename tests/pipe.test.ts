import { err, getErr, getOk, isErr, isOk, ok } from "elfs";
import { error, pipe } from "../src";

describe("Pipe", () => {
  it("should create callable pipe", () => {
    const testPipe = pipe((v: number) => ok(v * 2));

    expect(testPipe).toBeDefined();
    expect(typeof testPipe).toBe("function");
  });

  it("should execute all methods and return Ok", () => {
    const testPipe = pipe(
      (v: number) => ok(v * 2),
      (v) => ok(`${v}`),
    );

    const result = testPipe(1);

    expect(isOk(result)).toBe(true);
    expect(getOk(result)).toBe("2");
  });

  it("should stop execution and return Error", () => {
    const testPipe = pipe(
      (v: number) => (!(v % 2) ? ok(v) : err(error("TEST")(v))),
      (v) => ok(`${v}`),
    );

    const resultOk = testPipe(2);

    expect(isOk(resultOk)).toBe(true);
    expect(getOk(resultOk)).toBe("2");

    const resultErr = testPipe(1);

    expect(isErr(resultErr)).toBe(true);
    expect(getErr(resultErr)).toEqual(error("TEST")(1));
  });
});
