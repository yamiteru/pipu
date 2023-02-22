```shell
yarn add pipem
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

## Utils

### error

Returns function which dynamically creates error tuple based on value and potential sub-error.

It should mainly be used in `wrap` function as a second parameter.

### parse

Parses `Pipeable` with `unknown` input.

```ts
const isStringOrNumber = pipe(...);
// ResultErr<["OR", [], { }]>
const result1 = parse(isStringOrNumber, []);
// ResultOk<1>
const result2 = parse(isStringOrNumber, 1);
```

---

## Limitations

1. `and`/`pipe` and `or` can take up to 32 `Pipeable`s

---

Have a beautiful day 🍀.
