export const map = <I, O = I>(f: (data: I) => O) => f;

export const at = (i: number) => (v: unknown[]) => v.at(i);

export const toString = (v: unknown) => `${v}`;

export const toNumber = (v: string) => +v;

export const toInt = (v: string) => parseInt(v);

export const toFloat = (v: string) => parseFloat(v);

export const tap = <T>(f: (data: T) => void) =>
  map<T, T>((v) => {
    f(v);
    return v;
  });

export const multiply = (n: number) =>
  map<number, number>((v) => v * n);

export const divide = (n: number) =>
  map<number, number>((v) => v / n);

export const plus = (n: number) =>
  map<number, number>((v) => v + n);

export const minus = (n: number) =>
  map<number, number>((v) => v - n);
