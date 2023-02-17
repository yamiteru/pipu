import type { Pipeable } from "./types";

const emptyProps = () => ({});

export const error =
  <Input>(
    reason: string,
    props: (value: Input) => Record<string, unknown> = emptyProps,
  ): Pipeable<Input, never> =>
  (value) => {
    throw {
      reason,
      value,
      ...props(value),
    };
  };
