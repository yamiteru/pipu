import {
  InferResultErr,
  InferResultOk,
  None,
  ObjectAny,
  Result,
  ResultAny,
  ResultErr,
  ResultOk,
} from "./types";

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

export const match = <R extends ResultAny, OkOutput, ErrOutput>(
  result: R,
  onOk: (value: InferResultOk<R>) => OkOutput,
  onErr: (value: InferResultErr<R>) => ErrOutput,
) => (isOk(result) ? onOk(getOk(result)) : onErr(getErr(result)));
