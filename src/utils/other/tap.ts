import { Fn } from "../../types";

/*
 * Executes effect and returns input value.
 *
 * @remarks
 * It executes effect with input of type `Value` and returns nothing. The tap function then returns `Value`.
 *
 * @param effect - Function which takes `Value` as its first argument and returns nothing.
 * @returns Function which takes `Value` as its first argument and return `Value`.
 *
 * @example
 * ```ts
 * const log = tap<number>(
 *   (v) => console.log(`number: ${v}`)
 * );
 *
 * // logs "number: 1" and returns 1
 * log(1)
 * ```
 */
export const tap = <Value>(effect: Fn<Value, void>) => 
	(value: Value) => {
		effect(value);
		return value;
	};
