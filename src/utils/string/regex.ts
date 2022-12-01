import { condition } from "../other";

// Matches pattern inside a string
export const regex = (pattern: RegExp) =>
  condition<string>((v) => pattern.test(v));

