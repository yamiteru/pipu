import { Result, getErr, getOk, isOk } from "elfs";
import { and, filter, map, wrap, error, or } from "../src";

const customPipe = and(
  or(
    filter((v: number) => !(v % 2)),
    filter((v: string) => !(+v % 2)),
  ),
  wrap(
    map((v) => +v * 2),
    error("TEST"),
  ),
  and(
    map((v: number) => v * 2),
    map((v) => `${v}`),
  ),
);

const log = <$Result extends Result>(result: $Result) => {
  console.log(result, isOk(result), getOk(result), getErr(result));
};

// error
log(customPipe(1));

// '48'
log(customPipe(12));
