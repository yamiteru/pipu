const emptyProps = () => ({});

export const createError =
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
