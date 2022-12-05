import { condition } from "../other";

/*
 * Matches curried string with the input regex value
 */
export const regex = (pattern: RegExp) =>
  condition<string>((v) => pattern.test(v));

