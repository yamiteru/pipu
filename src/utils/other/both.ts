import { Bool, Fn } from "../../types";
import { condition } from "./condition";

/*
 * Passes if both one of the predicates return true
 *
 * @param predicate1 - First predicate
 * @param predicate2 - Second predicate
 * @returns Function which takes `Value` as first argument and returns `Value` if both of the predicates return true. Otherwise it returns undefined.
 *
 * @example
 * ```ts
 * const isAlive = both<number>(
 *   (v) => v >= 0,
 *   (v) => v <= 150,
 * )
 *
 * // returns undefined
 * isAlive(-10);
 *
 * // returns 25
 * isAlive(25);
 * ```
 */
export const both = <T>(
  predicate1: Fn<T, Bool>,
  predicate2: Fn<T, Bool>
) => condition<T>((v) => 
	predicate1(v) && predicate2(v)
);

