import { filter, map } from "../utils";

export const multiply = (n: number) => map<number, number>((v) => v * n);

export const divide = (n: number) => map<number, number>((v) => v / n);

export const plus = (n: number) => map<number, number>((v) => v + n);

export const increment = plus(1);

export const minus = (n: number) => map<number, number>((v) => v - n);

export const decrement = minus(1);

export const gte = (n: number) => filter<number>((v) => v >= n);

export const gt = (n: number) => filter<number>((v) => v > n);

export const lte = (n: number) => filter<number>((v) => v <= n);

export const lt = (n: number) => filter<number>((v) => v < n);


