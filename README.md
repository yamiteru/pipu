# Pipu

Powerful TypeScript a/sync pipes with focus on size, performance and modularity.

## Installation

---

```bash
yarn add pipu # npm install pipu
```

---

## Pipeables

Pipeables are functions that you can put into a pipe (pipe itself is `Pipeable`).

We try to make the number of core pipeables as low as possible so it's easy to build your own abstractions on top them.

### filter

Pipeable which runs either `truePipeable` or `falsePipeable` based on return value of `predicate`.

By default `truePipeable` returns `Ok<$Input>` and `falsePipeable` returns `Err<Error<"FILTER", $Input>>`.

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
// Pipeable<number, Result<string, Error>>
const doubleString = map((v: number) => `${v * 2}`);
```

### wrap

Pipeable which wraps a sub-pipeable and overrides its `Error`.

It's recommended to use `error` function to create a custom `Error`.

```ts
// Pipeable<number, Result<number, Error<"CUSTOM", number>>>
wrap(
  map((v: number) => v * 2),
  error("CUSTOM"),
);
```

### and

Pipeable which takes N number of pipeables and returns either `Ok` returned by the last pipeable or `Err` returned by any of the pipeables.

```ts
// Pipeable<number, Result<string, Error<"FILTER", number> | Error<"CUSTOM", number>>>
const customPipe = pipe(
  filter((v: number) => !(v % 2)),
  wrap(
    map((v) => `${v}`),
    error("CUSTOM"),
  ),
);
```

### or

Pipeable which takes N number of pipeables and returns either `Ok` returned by any of the pipeables or `Err` if none of the pipeables returned `Ok`.

```ts
// Pipeable<number, Result<number, Error<"OR", number>>>
const customPipe = or(
  filter((v: number) => !(v % 2)),
  filter((v: number) => !(v % 3)),
);
```

### resolve

Async pipeable which tries to resolve a promise and return `ResultOk`.

```ts
// PipeableAsync<number, Result<number, Error<"PROMISE", number>>>
const getUsersByAge = and(
  filter((age: number) => age > 18),
  resolve((age) => api.getUsersByAge(age)),
);
```

---

## Utils

### error

Creates error tuple based on value and potential sub-error.

It should mainly be used in `wrap` function as a second parameter.

All `Pipeable`s should return error created with this function.

```ts
error("TEST", (value, error) => ({ valueType: typeof value, error }));
```

### parse

Allows to run `Pipeable` with `unknown` input while infering everything else from the `Pipeable` as usual.

```ts
const isStringOrNumber = pipe(...);
// ResultErr<["OR", [], { }]>
const result1 = parse(isStringOrNumber, []);
// ResultOk<1>
const result2 = parse(isStringOrNumber, 1);
```

---

Have a beautiful day 🍀.
