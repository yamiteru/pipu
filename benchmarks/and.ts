import {err, ok} from "elfs";
import { suite, useTerminal } from "isitfast";
import {error} from "../src";
import {and} from "../src/sync";

const pipuAnd = and(
  (v: number) => v > 0.2 ? ok(v * 2) : err(error("TEST1")(v)),
  (v: number) => v < 0.8 ? ok(v * 2) : err(error("TEST2")(v)),
);

const test = suite("and", {
  pipu_and: () => {
    pipuAnd(Math.random());
  },
  // TODO: compare pipu_and with something else
});

(async () => {
  await useTerminal();
  await test();
})();
