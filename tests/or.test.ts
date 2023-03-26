import { getOk, isErr, isOk } from "elfs";
import { or, filter } from "../src/sync";

describe("or", () => {
  const isDividableByTwoOrThree = or(
    filter((v: number) => !(v % 2)),
    filter((v: number) => !(v % 3)),
  );

  it("should return Ok if one of the pipeables returns Ok", () => {
    const result1 = isDividableByTwoOrThree(2);

    expect(isOk(result1)).toBe(true);
    expect(getOk(result1)).toBe(2);

    const result2 = isDividableByTwoOrThree(3);

    expect(isOk(result2)).toBe(true);
    expect(getOk(result2)).toBe(3);
  });

  it("should return Err if neither one of the pipeables returns Ok", () => {
    const result = isDividableByTwoOrThree(5);

    expect(isErr(result)).toBe(true);
  });
});
