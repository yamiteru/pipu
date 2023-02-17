# Pipem

Low-level, type-safe and throwable piping for TypeScript with a few core pipeables.

## Pipeables

Pipeables are functions that you can put into a pipe (pipe itself is `Pipeable`).

We try to make the number of core pipeables as low as possible so it's easy to build your own abstractions on top it.

### Filter

Passes the input value to the next `Pipeable` if predicate returns true. Otherwise `filter` throws.

```ts
filter<number>((v) => !(v % 2));
```

### Match

Passes the result of one of the options to the next `Pipeable` if one of the predicates returns true. Otherwise `match` throws. Throws from sub-pipeables are bubbled to the top.

```ts
match<number, ["even", "odd", "default"]>([
  [isEven, () => "even"],
  [isOdd, () => "odd"],
  [() => true, () => "default"],
]);
```

### And

Passes the input value to the next `Pipeable` if no sub-pipeable throws. If one of them throws then the thrown object bubbles to the top.

```ts
and<number>(
  filter<string>((v) => v > 0),
  filter<string>((v) => v < 150),
);
```

### Or

Passes the input values to the next `Pipeable` if at least one of the sub-pipeables does not throw. If all of them throw then `or` throws.

```ts
or<string>(
  filter<string>((v) => v[0] === "a"),
  filter<string>((v) => v[0] === "b"),
);
```

### Wrap

It wraps a pipeable and let's you to modify its error for when it throws. If the child pipeable threw a non-object or an instance of `Error` then it's ignored and substituted with an empty object.

```ts
wrap<number>(
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

You can use `error` function to throw your own custom errors that adhere to the convention stated above.
