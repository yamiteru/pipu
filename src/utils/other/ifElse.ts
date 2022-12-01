import { Bool, Fn } from "../../types";

/*
 * Returns `Option1` or `Option2` based on predicate
 *
 * @remarks
 * It takes predicate which accepts argument `Value` and returns true or false. If it returns true it executes option1. Otherwise it executes option2.
 *
 * @param predicate - Function which takes `Value` and returns true or false.
 * @param option1 - Function which gets executed if predicate returns true.
 * @param option2 - Function which gets executed if predicate returns false.
 * @returns Function which takes `Value` and returns `Option1` or `Option2`.
 *
 * @example
 * ```ts
 * const isDivisibleByTwo = ifElse<number, string>(
 *   (v) => !(v%2),
 *   () => "divisible by 2",
 *   () => "not divisible by 2"
 * );
 *
 * // returns "not divisible by 2"
 * isDivisibleByTwo(3);
 *
 * // returns "divisible by 2"
 * isDivisibleByTwo(4);
 * ```
 */
export const ifElse = <
	Value, 
	Option1 = Value, 
	Option2 = Option1
>(
	predicate: Fn<Value, Bool>,
	option1: Fn<Value, Option1>,
	option2: Fn<Value, Option2>,
) =>
(value: Value) =>
	predicate(value) 
		? option1(value) 
		: option2(value);
