import { ObjectAny, Pattern, ResultAny, ResultErr, ResultOk } from "./types";

const emptyProps = () => ({});

export const createError =
  <Reason extends string, Input>(
    reason: Reason,
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

export const pipeError = <
  Reason extends string,
  Value,
  Props extends ObjectAny,
>(
  reason: Reason,
  value: Value,
  props?: Props,
) => ({
  reason,
  value,
  ...(props || {}),
});

export const NONE = Symbol();

export const ok = <Ok>(value: Ok): ResultOk<Ok> => [value, NONE];

export const err = <Err>(value: Err): ResultErr<Err> => [NONE, value];

export const isOk = <R extends ResultAny>(result: R) => result[1] === NONE;

export const isErr = <R extends ResultAny>(result: R) => result[0] === NONE;

export const getOk = <R extends ResultAny>(result: R) => result[0];

export const getErr = <R extends ResultAny>(result: R) => result[1];

export function match<Input, Outputs extends unknown[]>(
  input: Input,
  ...patterns: {
    [Key in keyof Outputs]: Pattern<Input, Outputs[Key]>;
  }
): Outputs[number] {
  const length = patterns.length;

  for (let i = 0; i < length; ++i) {
    const [predicate, output] = patterns[i];

    if (predicate(input)) return output(input);
  }
}
export const Ok = <Input extends ResultAny, Output>(
  fn: (value: Input) => Output,
) => [isOk, fn] satisfies Pattern<Input, Output>;

export const Err = <Input extends ResultAny, Output>(
  fn: (value: Input) => Output,
) => [isErr, fn] satisfies Pattern<Input, Output>;
