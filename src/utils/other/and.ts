import { Bool, Fn } from "../../types";
import { condition } from "./condition";

/**
 * Returns `Value` if all predicates return true 
 *
 * @remarks
 * It takes N number of predicates and returns `condition` which sequentically calls all of them and returns true if all of them pass.
 *
 * @param predicates - Functions to be checked against `Value`
 * @returns `condition`
 *
 * @example
 * ```ts
 * const isAlive = and<number>(
 *  (v) => v >= 0,
 *  (v) => v <= 150
 * );
 *
 * // returns undefined
 * isAlive(-10);
 *
 * // returns 25
 * isAlive(25);
 * ```
 */
export const and = <Value>(
	...predicates: Fn<Value, Bool>[]
) => {
	const length = predicates.length;

	return condition<Value>((v) => {
		for(let i = 0; i < length; ++i) {
			if(!predicates[i](v)) {
				return false;
			}
		}

		return true;
	});
}; 
