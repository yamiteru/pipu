import { suite, useTerminal } from "isitfast";
import {filter} from "../src/sync";

const pipuFilter = filter((v: number) => !(v % 2));

const test = suite("filter", {
  pipu_filter: () => {
    pipuFilter(Math.random());
  },
  // TODO: compare pipu_filter with something else
});

(async () => {
  await useTerminal();
  await test();
})();
