import {getErr, getOk, isErr, isOk} from "elfs";
import {error} from "../../src";
import {parse} from "../../src/async";
import {filter, map} from "../../src/sync";

describe("async/parse", () => {
  const double = map((v: number) => v * 2);
  const even = filter((v: number) => !(v % 2));

  it("should return Ok", async () => {
    const result = await parse(double, 1);

    expect(isOk(result)).toBe(true);
    expect(getOk(result)).toBe(2);
  });

  it("should return Err", async () => {
    const result = await parse(even, 1);

    expect(isErr(result)).toBe(true);
    expect(getErr(result)).toEqual(error("FILTER")(1));
  });
});
