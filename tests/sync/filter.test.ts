import { getOk, isErr, isOk, ok } from "elfs";
import { filter } from "../../src/sync";

describe("sync/filter", () => {
  const isEvenDefault = filter((v: number) => !(v % 2));
  const isEvenCustom = filter(
    (v: number) => !(v % 2),
    () => ok("even"),
    () => ok("odd"),
  );

  it("should return default Ok of the input on true", () => {
    const result = isEvenDefault(2);

    expect(isOk(result)).toBe(true);
    expect(getOk(result)).toBe(2);
  });

  it("should return custom Ok of truePipeable on true", () => {
    const result = isEvenCustom(2);

    expect(isOk(result)).toBe(true);
    expect(getOk(result)).toBe("even");
  });

  it("should return default Error on false", () => {
    const result = isEvenDefault(1);

    expect(isErr(result)).toBe(true);
  });

  it("should return custom Ok on false", () => {
    const result = isEvenCustom(1);

    expect(isOk(result)).toBe(true);
    expect(getOk(result)).toBe("odd");
  });
});
