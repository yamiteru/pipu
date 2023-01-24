# Pipem

Async, abortable and composable pipe with a bunch of helpful utils.

___

## Library is WIP
Right now this library is in a pre-alpha phase. It hasn't been published to NPM yet.

If you want to help speed up the process you can check out the Projecs tab. There should be a bunch of new utils and improvements ready to work on.

This library is currently being used in [Vaal](https://github.com/yamiteru/vaal).
___

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
