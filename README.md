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

### customError

It wraps a pipeable and let's you to modify its error. If the child pipeable threw a non-object or an instance of `Error` then it's ignored and substituted with an empty object.

```ts
customError<number>(
  filter<number>(...),
  (value, error) => ({ reason: "TEST", value, child: error })
)
```

### map

Just use an anonymouse fat arrow function. A custom map function would be redundant.

```ts
pipe((value: number) => value * 2);
```

## Errors

Are you a soy boi who uses `try/catch` and later on cries alone in the corner because `try/catch` sucks? You no longer have to be!

In Pipem we use `Result<Ok, Err>` for all pipeables. We have an `Error` type and a handful of utils to help you work with `Result` like `isOk`/`isErr`/`getOk`/`getErr`/`match`/etc.

If your pipeable throws it means that you have an unhandled behavior that needs to be put in order with `err`! Named errors are better than un-named.

If you intentionally throw your pp is gonna shrink.
