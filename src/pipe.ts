import { PipeFn, PipeReturn } from "./types";

const createPipePromise = (
  fs: PipeFn<unknown, unknown>[],
  length: number,
  id: symbol,
  value: unknown
) => new Promise((resolve) => {
    let latest = value;

    for(let i = 0; i < length; ++i) {
      const res = fs[i](latest, id);
      res === undefined && resolve(undefined);

      latest = res;
    }

    resolve(latest);
  });

// TODO: overload me harder daddy
export function pipe<A, B>(
  ab: PipeFn<A, B>,
): PipeReturn<A, B>;
export function pipe<A, B, C>(
  ab: PipeFn<A, B>,
  bc: PipeFn<B, C>
): PipeReturn<A, C>;
export function pipe<A, B, C, D>(
  ab: PipeFn<A, B>,
  bc: PipeFn<B, C>,
  cd: PipeFn<C, D>
): PipeReturn<A, D>;
export function pipe(...fs: PipeFn<unknown, unknown>[]) {
  const length = fs.length;
  const id = Symbol();

  return (value: unknown) =>
    createPipePromise(fs, length, id, value);
}
