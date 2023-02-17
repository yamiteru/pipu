import { Pipeable, Predicate } from "./types";

const emptyProps = () => ({});

export const error =
  <Input>(
    reason: string,
    props: (value: Input) => Record<string, unknown> = emptyProps,
  ) =>
  (value: Input, error = {}) => {
    return {
      ...error,
      reason,
      value,
      ...props(value),
    };
  };

export const option = <Input, Output>(
  predicate: Predicate<Input>,
  pipeable: Pipeable<Input, Output>,
) => [predicate, pipeable] as [Predicate<Input>, Pipeable<Input, Output>];
