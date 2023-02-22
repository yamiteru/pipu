```shell
yarn add pipem // pnpm add pipem
```

---

## Pipeables

Pipeables are functions that you can put into a pipe (pipe itself is `Pipeable`).

We try to make the number of core pipeables as low as possible so it's easy to build your own abstractions on top them.

### filter

It passes the input value to the next `Pipeable` if predicate returns true and/or `truePipeable`/`falsePipeable` return `Ok`. Otherwise `filter` returns `Err`.

```ts
filter((v: number) => !(v % 2));

filter(
  (v: number) => !(v % 2),
  () => ok("even"),
);

filter(
  (v: number) => !(v % 2),
  () => ok("even"),
  () => ok("odd"),
);
```

### map

It maps value from `$Input` to `$Output` and returns it as `Ok<$Output>`.

```ts
map((v: number) => `${v}`);
```

### wrap

It let's you modify `Err` of a sub-pipeable. When `Ok` is returned by the sub-pipeable it just passes it through without changing it. When `Err` is returned it gets passed into the `error` function and produces a new `Err`.

```ts
wrap(
  filter(...),
  error("TEST")
);
```

### and

It passes input value to the next `Pipeable` if no sub-pipeable returns `Err`.

```ts
and(
  filter((v: number) => v > 0),
  filter((v: number) => v <= 10),
);
```

### or

It passes input value to the next `Pipeable` if at least one of the sub-pipeables returns `Ok`.

```ts
or(
  filter((v: number) => !(v % 2)),
  filter((v: number) => !(v % 3)),
);
```

### pipe

Pipe is just `and`.

---

## Errors

Are you a soy boi who uses `try/catch` and later on cries alone in the corner because `try/catch` sucks? You no longer have to be!

In Pipem we use `Result<Ok, Err>` for all pipeables. We have an `Error` type and a handful of utils to help you work with `Result` like `isOk`/`isErr`/`getOk`/`getErr`/`match`/etc.

(You can find more information about this in (Elfs)[https://github.com/yamiteru/elfs])

If your pipeable throws it means that you have an unhandled behavior that needs to be put in order with `err`! Named errors are better than un-named.

If you intentionally throw your pp is gonna shrink.

---

## Limitations

1. `and`/`pipe` and `or` can take up to 32 `Pipeable`s

---

Have a beautiful day 🍀.
