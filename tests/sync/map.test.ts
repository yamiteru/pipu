import { getOk, isErr, isOk } from "elfs";
import { map } from "../../src/sync";

describe("sync/map", () => {
  const double = map((v: number) => v * 2);
  const getter = map((v: { get: () => number }) => v.get());

  it("should return Ok", () => {
    const result = double(1);

    expect(isOk(result)).toBe(true);
    expect(getOk(result)).toBe(2);
  });

  it("should return Err", () => {
    const result = getter("hello" as any);

    expect(isErr(result)).toBe(true);
  });
});
