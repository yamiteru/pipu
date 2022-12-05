/**
 * Transform any value into string.
 *
 * @remarks
 * It accepts value of any type and wraps it inside a string template literal.
 *
 * @prop value - Value to be transformed into string
 * @returns String representation of the input value.
 *
 * @example
 * ```ts
 * // returns "1"
 * toString(1);
 *
 * // returns "[object Object]"
 * toString({});
 * ```
 */
export const toString = (value: unknown) =>
	`${value}`
