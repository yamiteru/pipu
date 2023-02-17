import type {
  InferOptionInputs,
  InferOptionOutputs,
  InferPipeableInputs,
  ObjectAny,
  Pipeable,
  PipeableAny,
  Predicate,
  PredicateAny,
} from "./types";
import { error } from "./utils";

const filterError = error("FILTER");

export function filter<Input>(predicate: Predicate<Input>) {
  return ((value) => {
    if (!predicate(value)) {
      throw filterError(value);
    }

    return value;
  }) as Pipeable<Input, Input>;
}

const matchError = error("MATCH");

export function match<Options extends [PredicateAny, PipeableAny][]>(
  options: Options,
) {
  const length = options.length;

  return ((value) => {
    for (let i = 0; i < length; ++i) {
      const [predicate, output] = options[i];

      if (predicate(value)) {
        return output(value);
      }
    }

    throw matchError(value);
  }) as Pipeable<InferOptionInputs<Options>, InferOptionOutputs<Options>>;
}

export function and<Pipeables extends PipeableAny[]>(...pipeables: Pipeables) {
  const length = pipeables.length;

  return ((value) => {
    for (let i = 0; i < length; ++i) {
      pipeables[i](value);
    }

    return value;
  }) as Pipeable<
    InferPipeableInputs<Pipeables>,
    InferPipeableInputs<Pipeables>
  >;
}

const orError = error("OR");

export function or<Pipeables extends PipeableAny[]>(...pipeables: Pipeables) {
  const length = pipeables.length;

  return ((value) => {
    for (let i = 0; i < length; ++i) {
      try {
        return pipeables[i](value);
      } catch {
        continue;
      }
    }

    throw orError(value);
  }) as Pipeable<
    InferPipeableInputs<Pipeables>,
    InferPipeableInputs<Pipeables>
  >;
}

export function wrap<Input, Output>(
  pipeable: Pipeable<Input, Output>,
  error: (value: Input, error: ObjectAny) => ObjectAny,
) {
  return ((value) => {
    try {
      return pipeable(value);
    } catch (maybeError) {
      throw error(
        value,
        maybeError !== null &&
          typeof maybeError === "object" &&
          maybeError instanceof Error === false
          ? (maybeError as ObjectAny)
          : {},
      );
    }
  }) as Pipeable<Input, Output>;
}
