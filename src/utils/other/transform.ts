import { Fn } from "../../types";

/**
 * Returns output based on fn.
 *
 * @remarks
 * The function takes a generic tyep `Input` and `Output`. `Input` is passed into the fn and `Output` is returned.
 *
 * @param fn - Function which takes value of type `Input` as the first argument and returns `Output`.
 *
 * @returns Function which takes a values of type `Input` and returns `Output`.
 *
 * @example
 * ```ts
 * const doubleString<number, string>(
 *   (v) => `${v*2}`
 * );
 *
 * // returns "2"
 * doubleString(1);
 *
 * // returns "4"
 * doubleString(2);
 * ```
 */
export const transform = <
	Input, 
	Output = Input
>(fn: Fn<Input, Output>) => fn;
