# Pipem

Async, abortable and composable pipe with a bunch of helpful utils.

## How to use

```ts
const counterPipe = pipe(
  filter((v: number) => !(v%2)),
  map((v) => v * 2),
  ifElse(
    lte(10),
    (v) => `${v} <= 10`,
    (v) => `${v} > 10`
  )
);

// returns undefined
const res1 = await counterPipe(1);

// returns "4 <= 10"
const res2 = await counterPipe(2);
```
