import { err, ok } from "elfs";
import { suite, useTerminal } from "isitfast";
import { error } from "../src";
import { or } from "../src/sync";

const pipuOr = or(
  (v: number) => (v > 0.2 ? ok(v * 2) : err(error("TEST1")(v))),
  (v: number) => (v < 0.8 ? ok(v * 2) : err(error("TEST2")(v))),
);

const test = suite("or", {
  pipu_or: () => {
    pipuOr(Math.random());
  },
  // TODO: compare pipu_or with something else
});

(async () => {
  await useTerminal();
  await test();
})();
