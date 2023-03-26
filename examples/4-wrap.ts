import {error} from "../src";
import {filter, wrap} from "../src/sync";

export const adultFilter = wrap(
  filter((age: number) => age >= 18),
  error("AGE_IS_NOT_ADULT")
);
