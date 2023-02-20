# Pipem

Low-level, type-safe and throwable piping for TypeScript with a few core pipeables.

## Pipeables

Pipeables are functions that you can put into a pipe (pipe itself is `Pipeable`).

We try to make the number of core pipeables as low as possible so it's easy to build your own abstractions on top it.

### filter

Passes the input value to the next `Pipeable` if predicate returns true. Otherwise `filter` returns `Error`.

```ts
filter<number>((v) => !(v % 2));
```

### map

```ts
map<number, string>((v) => `${v}`);
```

### ifElse

```ts
ifElse(
  (v) => !(v % 2),
  () => "even",
  () => "odd",
);
```

### and

Passes the input value to the next `Pipeable` if no sub-pipeable returns `Error`.

```ts
and(
  filter<string>((v) => v > 0),
  filter<string>((v) => v < 150),
);
```

### or

Passes the input values to the next `Pipeable` if at least one of the sub-pipeables does not return `Error`.

```ts
or(
  filter<string>((v) => v[0] === "a"),
  filter<string>((v) => v[0] === "b"),
);
```

### customError

It let's you modify error of a sub-pipeable.

```ts
customError(
  filter<number>(...),
  (value, error) => ({ reason: "TEST", value, child: error })
)
```

## Errors

Are you a soy boi who uses `try/catch` and later on cries alone in the corner because `try/catch` sucks? You no longer have to be!

In Pipem we use `Result<Ok, Err>` for all pipeables. We have an `Error` type and a handful of utils to help you work with `Result` like `isOk`/`isErr`/`getOk`/`getErr`/`match`/etc.

If your pipeable throws it means that you have an unhandled behavior that needs to be put in order with `err`! Named errors are better than un-named.

If you intentionally throw your pp is gonna shrink.
