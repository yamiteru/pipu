import { pipe } from "../src";

describe("Pipe", () => {
  it("should create callable pipe", () => {
    const testPipe = pipe((v: number) => v * 2);

    expect(testPipe).toBeDefined();
    expect(typeof testPipe).toBe("function");
  });

  it("should execute all methods", () => {
    const testPipe = pipe(
      (v: number) => v * 2,
      (v) => `${v}`,
    );

    const res = testPipe(1);

    expect(res).toBe("2");
  });

  it("should stop execution and throw on error", () => {
    const testPipe = pipe(
      (v: number) => (!(v % 2) ? v : undefined),
      (v) => {
				if(v === undefined) {
					throw {};
				} else {
					return v;
				}
			},
      (v) => `${v}`,
    );

    expect(() => testPipe(1)).toThrow();
    expect(() => testPipe(2)).not.toThrow();
  });
});
