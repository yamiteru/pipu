import {
  at,
  divide,
  map,
  minus,
  multiply,
  plus,
  tap,
  toFloat,
  toInt,
  toString
} from "../src";

describe("Methods", () => {
  test("map", () => expect(map<number>((v) => v*2)(1)).toBe(2));
  test("at", () => expect(at(1)([1, 2])).toBe(2));
  test("toString", () => expect(toString(1)).toBe("1"));
  test("toInt", () => expect(toInt("1")).toBe(1));
  test("toFloat", () => expect(toFloat("0.5")).toBe(0.5));
  test("tap", () => expect(tap(() => {return;})(1)).toBe(1));
  test("multiply", () => expect(multiply(2)(1)).toBe(2));
  test("divide", () => expect(divide(2)(4)).toBe(2));
  test("plus", () => expect(plus(3)(2)).toBe(5));
  test("minus", () => expect(minus(2)(3)).toBe(1));
});
