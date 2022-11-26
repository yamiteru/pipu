import { pipe } from "../src";

describe("Pipe", () => {
  it("should create callable pipe", () => {
    const testPipe = pipe((v: number) => v*2);

    expect(testPipe).toBeDefined();
    expect(typeof testPipe).toBe("function");
  });

  it("should execute all methods", async () => {
    const testPipe = pipe(
      (v: number) => v * 2,
      (v) => `${v}`
    );

    const res = await testPipe(1);

    expect(res).toBe("2");
  });

  it("should stop execution on undefined", async () => {
    const testPipe = pipe(
      (v: number) => !(v%2) ? v: undefined,
      (v) => v*2,
      (v) => `${v}`
    );

    const res1 = await testPipe(1);
    const res2 = await testPipe(2);

    expect(res1).toBe(undefined);
    expect(res2).toBe("4");
  });
});
