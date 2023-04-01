import { suite, useTerminal } from "isitfast";
import { resolve } from "../src/async";

const pipuResolve = resolve(
  (v: number) => new Promise<number>((resolve) => resolve(v)),
);

const test = suite("resolve", {
  pipu_resolve: async () => {
    await pipuResolve(Math.random());
  },
  // TODO: compare pipu_resolve with something else
});

(async () => {
  await useTerminal();
  await test();
})();
