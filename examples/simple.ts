import { condition, customError } from "../src";

const customPipe = customError(
  condition<number>((v) => !(v % 2)),
  (value, e) => ({ reason: "TEST", value, subReason: e.reason } as const),
);

console.log(customPipe(1));
console.log(customPipe(2));
