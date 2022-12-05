import { Bool, Fn } from "../../types";

/**
 * Returns input or undefined based on predicate.
 *
 * @remarks
 * The function takes a generic type `Value`. `Value` is passed into the predicate which returns boolean.
 *
 * If the predicate returns true then the input value of type `Value` is returned. Otherwise undefined is returned.
 *
 * @param predicate - Function which take value of type `Value` as the first argument and returns boolean.
 *
 * @returns Function which takes a value of type `Value` and returns `Value` or undefined.
 *
 * @example
 * ```ts
 * const isEven = condition<number>(
 *   (v) => !(v%2)
 * );
 * 
 * // returns undefined 
 * isEven(1);
 *
 * // returns 4 
 * isEven(4);
 * ```
 */
export const condition = <Value>(
	predicate: Fn<Value, Bool>
) => (value: Value) => predicate(value) 
	? value
	: undefined;
