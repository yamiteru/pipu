import { Bool, Fn } from "../../types";
import { condition } from "./condition";

/*
 * Returns `Value` if either one of the predicates returns true 
 *
 * @remarks
 * It takes N number of predicates and returns `condition` which sequentically calls all of them and returns true if either one of them passed.
 *
 * @param predicates - Functions to be checked against `Value`
 * @returns `condition`
 *
 * @example
 * ```ts
 * const isFavoriteTea = or<string>(
 *   (v) => v.toLowerCase().includes("puerh"),
 *   (v) => v.toLowerCase().includes("green")
 * );
 *
 * // returns undefined
 * isFavoriteTea("Black tea");
 *
 * // returns "Green tea" 
 * isFavoriteTea("Green tea");
 * ```
 */
export const or = <Value>(
	...predicates: Fn<Value, Bool>[]
) => {
	const length = predicates.length;

	return condition<Value>((v) => {
		for(let i = 0; i < length; ++i) {
			if(predicates[i](v)) {
				return true;
			}
		}

		return false;
	});
};
