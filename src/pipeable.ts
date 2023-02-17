import { Pipeable, Predicate } from "./types";
import { error } from "./utils";

const filterError = error("FILTER");

export function filter<Input>(predicate: Predicate<Input>) {
  return ((value) => {
    if (!predicate(value)) {
      filterError(value);
    }

    return value;
  }) as Pipeable<Input, Input>;
}

const matchError = error("MATCH");

export function match<Input, Outputs extends unknown[]>(options: {
  [Key in keyof Outputs]: [Predicate<Input>, Pipeable<Input, Outputs[Key]>];
}) {
  const length = options.length;

  return ((value) => {
    for (let i = 0; i < length; ++i) {
      const [predicate, output] = options[i];

      if (predicate(value)) {
        return output(value);
      }
    }

    matchError(value);
  }) as Pipeable<Input, Outputs[number]>;
}

export function and<Input>(...pipeables: Pipeable<Input, Input>[]) {
  const length = pipeables.length;

  return ((value) => {
    for (let i = 0; i < length; ++i) {
      pipeables[i](value);
    }

    return value;
  }) as Pipeable<Input, Input>;
}

const orError = error("OR");

export function or<Input>(...pipeables: Pipeable<Input, Input>[]) {
  const length = pipeables.length;

  return ((value) => {
    for (let i = 0; i < length; ++i) {
      try {
        return pipeables[i](value);
      } catch {
        continue;
      }
    }

    orError(value);
  }) as Pipeable<Input, Input>;
}

export function wrap<Input, Output>(
  pipeable: Pipeable<Input, Output>,
  error: (
    value: Input,
    childError: Record<string, unknown>,
  ) => Record<string, unknown>,
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
          ? (maybeError as Record<string, unknown>)
          : {},
      );
    }
  }) as Pipeable<Input, Output>;
}
