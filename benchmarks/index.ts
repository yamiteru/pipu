import { suite, useTerminal } from "isitfast";

// TODO: add benchmark/s
const test = suite("test", {
  object_index: async () => {
    /* */
  },
  switch_case: () => {
    /* */
  },
});

(async () => {
  await useTerminal();
  await test();
})();
