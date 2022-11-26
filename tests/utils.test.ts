import {
  at,
  call,
  decrement,
  divide,
  eq,
  filter,
  gt,
  gte,
  ifElse,
  increment,
  lt,
  lte,
  map,
  minus,
  multiply,
  neq,
  plus,
  tap,
  toFloat,
  toInt,
  toString,
} from "../src";

describe("Methods", () => {
  test("map", () => {
    const double = map<number>((v) => v * 2);

    expect(double(1)).toBe(2);
    expect(double(2)).toBe(4);
  });

  test("ifElse", () => {
    const oddOrEven = ifElse(
      (v: number) => !(v % 2),
      () => "even",
      () => "odd",
    );

    expect(oddOrEven(1)).toBe("odd");
    expect(oddOrEven(2)).toBe("even");
  });

  test("filter", () => {
    const evenFilter = filter<number>((v) => !(v % 2));

    expect(evenFilter(1)).toBe(undefined);
    expect(evenFilter(2)).toBe(2);
  });

  test("at", () => {
    const arr = [1, 2];

    expect(at(0)(arr)).toBe(1);
    expect(at(1)(arr)).toBe(2);
  });

  test("toString", () => {
    expect(toString(1)).toBe("1");
    expect(toString([1, 2])).toBe("1,2");
  });

  test("toInt", () => {
    expect(toInt("1")).toBe(1);
    expect(toInt("hello")).toBe(NaN);
  });

  test("toFloat", () => {
    expect(toFloat("0.5")).toBe(0.5);
    expect(toFloat("hello")).toBe(NaN);
  });

  test("tap", () => {
    const fn = jest.fn();
    const effect = tap(fn);

    expect(effect(1)).toBe(1);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test("multiply", () => {
    expect(multiply(2)(1)).toBe(2);
  });

  test("divide", () => {
    expect(divide(2)(4)).toBe(2);
  });

  test("plus", () => {
    expect(plus(2)(4)).toBe(6);
  });

  test("increment", () => {
    expect(increment(1)).toBe(2);
  });

  test("minus", () => {
    expect(minus(2)(2)).toBe(0);
  });

  test("decrement", () => {
    expect(decrement(1)).toBe(0);
  });

  test("gte", () => {
    const gte4 = gte(4);

    expect(gte4(2)).toBe(undefined);
    expect(gte4(4)).toBe(4);
    expect(gte4(6)).toBe(6);
  });

  test("gt", () => {
    const gt4 = gt(4);

    expect(gt4(2)).toBe(undefined);
    expect(gt4(4)).toBe(undefined);
    expect(gt4(6)).toBe(6);
  });

  test("lte", () => {
    const lte4 = lte(4);

    expect(lte4(2)).toBe(2);
    expect(lte4(4)).toBe(4);
    expect(lte4(6)).toBe(undefined);
  });

  test("lt", () => {
    const lt4 = lt(4);

    expect(lt4(2)).toBe(2);
    expect(lt4(4)).toBe(undefined);
    expect(lt4(6)).toBe(undefined);
  });

  test("eq", () => {
    const eq4 = eq(4);

    expect(eq4(2)).toBe(undefined);
    expect(eq4(4)).toBe(4);
  });

  test("neq", () => {
    const neq4 = neq(4);

    expect(neq4(2)).toBe(2);
    expect(neq4(4)).toBe(undefined);
  });

  test("call", () => {
    const callAtZero = call("at", 0);

    expect(callAtZero([1, 2, 3])).toBe(1);
  });
});