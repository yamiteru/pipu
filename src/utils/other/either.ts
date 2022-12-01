import { Bool, Fn } from "../../types";
import { condition } from "./condition";

/*
 * Passes if either one of the predicates returns true
 *
 * @param predicate1 - First predicate
 * @param predicate2 - Second predicate
 * @returns Function which takes `Value` as first argument and returns `Value` if one of the predicates returns true. Otherwise it returns undefined.
 *
 * @example
 * ```ts
 * const isFavoriteTea = either<string>(
 *   (v) => v.toLowerCase().includes("puerh"),
 *   (v) => v.toLowerCase().includes("green"),
 * )
 *
 * // returns undefined
 * isFavoriteTea("Black tea");
 *
 * // returns "Puerh tea"
 * isFavoriteTea("Dark puerh tea");
 * ```
 */
export const either = <T>(
  predicate1: Fn<T, Bool>,
  predicate2: Fn<T, Bool>
) => condition<T>((v) => 
	predicate1(v) || predicate2(v)
);

