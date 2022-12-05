import { condition } from "./condition";

/**
 * Compares if one value is not equal to the second value.
 *
 * @remarks
 * Takes value of type `Value` and returns `conditon` with strict not equal condition.
 *
 * @param value - Value of type `Value` to be compared to the other value.
 * @returns `condition`
 *
 * @example
 * ```ts
 * const isNotOne = eq<number>(1);
 *
 * // returns undefined
 * isOne(1);
 *
 * // returns 1
 * isOne(2);
 * ```
 */
export const neq = <Value>(value: Value) => 
	condition<Value>((v) => v !== value); 
