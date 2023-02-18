import type { ObjectAny, Pipeable, Predicate } from "./types";
import { createError } from "./utils";

const filterError = createError("CONDITION");

export function condition<Input>(predicate: Predicate<Input>) {
  return ((value) => {
    if (!predicate(value)) {
      throw filterError(value);
    }

    return value;
  }) as Pipeable<Input, Input>;
}

export function ifElse<Input, TrueBranch, FalseBranch>(
  predicate: Predicate<Input>,
  trueBranch: Pipeable<Input, TrueBranch>,
  falseBranch: Pipeable<Input, FalseBranch>,
) {
  return ((value) => {
    if (predicate(value)) {
      return trueBranch(value);
    }

    return falseBranch(value);
  }) as Pipeable<Input, TrueBranch | FalseBranch>;
}

export function tryCatch<Input, TryBranch, CatchBranch>(
  tryBranch: Pipeable<Input, TryBranch>,
  catchBranch: Pipeable<Input, CatchBranch>,
) {
  return ((value) => {
    try {
      return tryBranch(value);
    } catch {
      return catchBranch(value);
    }
  }) as Pipeable<Input, TryBranch | CatchBranch>;
}

export function both<FirstInput, SecondInput>(
  firstPipeable: Pipeable<FirstInput, unknown>,
  secondPipeable: Pipeable<SecondInput, unknown>,
) {
  return ((value) => {
    firstPipeable(value as never);
    secondPipeable(value as never);

    return value;
  }) as Pipeable<FirstInput | SecondInput, FirstInput | SecondInput>;
}

export function either<FirstInput, SecondInput>(
  firstPipeable: Pipeable<FirstInput, unknown>,
  secondPipeable: Pipeable<SecondInput, unknown>,
) {
  return ((value) => {
    try {
      firstPipeable(value as never);
    } catch {
      secondPipeable(value as never);
    }

    return value;
  }) as Pipeable<FirstInput | SecondInput, FirstInput | SecondInput>;
}

export function customError<Input, Output>(
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
