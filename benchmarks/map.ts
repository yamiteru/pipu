import { suite, useTerminal } from "isitfast";
import {map} from "../src/sync";

const pipuMap = map((v: number) => v * 2);

const test = suite("map", {
  pipu_map: () => {
    pipuMap(Math.random());
  },
  // TODO: compare pipu_map with something else
});

(async () => {
  await useTerminal();
  await test();
})();
