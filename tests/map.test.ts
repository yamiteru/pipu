import { getOk, isOk } from "elfs";
import { map } from "../src/sync";

describe("map", () => {
  const double = map((v: number) => v * 2);

  it("should return Ok", () => {
    const result = double(1);

    expect(isOk(result)).toBe(true);
    expect(getOk(result)).toBe(2);
  });
});
