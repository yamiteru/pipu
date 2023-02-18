# Pipem

Low-level, type-safe and throwable piping for TypeScript with a few core pipeables.

## Pipeables

Pipeables are functions that you can put into a pipe (pipe itself is `Pipeable`).

We try to make the number of core pipeables as low as possible so it's easy to build your own abstractions on top it.

### condition

Passes the input value to the next `Pipeable` if predicate returns true. Otherwise `condition` throws.

```ts
condition<number>((v) => !(v % 2));
```

### ifElse

```ts
ifElse(
  (v) => !(v % 2),
  () => "even",
  () => "odd",
);
```

### both

Passes the input value to the next `Pipeable` if no sub-pipeable throws. If one of them throws then the thrown object bubbles to the top.

```ts
both<number>(
  filter<string>((v) => v > 0),
  filter<string>((v) => v < 150),
);
```

### either

Passes the input values to the next `Pipeable` if at least one of the sub-pipeables does not throw. If the second one throws then the thrown object bubbles to the top.

```ts
either<string>(
  filter<string>((v) => v[0] === "a"),
  filter<string>((v) => v[0] === "b"),
);
```

### tryCatch

```ts
tryCatch(
  filter(...),
  () => "default"
);
```

### customError

It wraps a pipeable and let's you to modify its error. If the child pipeable threw a non-object or an instance of `Error` then it's ignored and substituted with an empty object.

```ts
customError<number>(
  filter<number>(...),
  (v, error) => ({ ...error, message: `Value ${v} is invalid` })
)
```

### Map

Just use an anonymouse fat arrow function. A custom map function would be redundant.

```ts
pipe((value: number) => value * 2);
```

## Errors

Some of the utils throw objects that act as custom errors when a condition is not met. For example when you filter and a predicate returns false it stops futher execution and throws an object which looks like this:

```ts
{
  reason: string;
  value: unknown;
  [key: string]: unknown;
}
```

It's recommended to stick to this convention in your own pipeables.
utilities

You can use `createError` function to create and throw your own custom errors that adhere to the convention stated above.
