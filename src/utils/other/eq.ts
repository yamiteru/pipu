import { condition } from "./condition";

/*
 * Compares if one value is equal to the second value.
 *
 * @remarks
 * Takes value of type `Value` and returns `conditon` with strict equalcondition.
 *
 * @param value - Value of type `Value` to be compared to the other value.
 * @returns `condition`
 *
 * @example
 * ```ts
 * const isOne = eq<number>(1);
 *
 * // returns undefined
 * isOne(2);
 *
 * // returns 1
 * isOne(1);
 * ```
 */
export const eq = <Value>(value: Value) => 
	condition<Value>((v) => v === value); 
