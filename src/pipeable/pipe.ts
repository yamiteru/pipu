import { Result, getOk, isErr, ok } from "elfs";
import { Error, Pipeable } from "../types";

export function pipe<A1, B1, B2 extends Error>(
  ab: Pipeable<A1, Result<B1, B2>>,
): Pipeable<A1, Result<A1, B2>>;
export function pipe<A1, B1, B2 extends Error, C1, C2 extends Error>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
): Pipeable<A1, Result<A1, B2 | C2>>;
export function pipe<
  A1,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
): Pipeable<A1, Result<A1, B2 | C2 | D2>>;
export function pipe<
  A1,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
  E1,
  E2 extends Error,
>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
  de: Pipeable<D1, Result<E1, E2>>,
): Pipeable<A1, Result<A1, B2 | C2 | D2 | E2>>;
export function pipe<
  A1,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
  E1,
  E2 extends Error,
  F1,
  F2 extends Error,
>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
  de: Pipeable<D1, Result<E1, E2>>,
  ef: Pipeable<E1, Result<F1, F2>>,
): Pipeable<A1, Result<A1, B2 | C2 | D2 | E2 | F2>>;
export function pipe<
  A1,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
  E1,
  E2 extends Error,
  F1,
  F2 extends Error,
  G1,
  G2 extends Error,
>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
  de: Pipeable<D1, Result<E1, E2>>,
  ef: Pipeable<E1, Result<F1, F2>>,
  fg: Pipeable<F1, Result<G1, G2>>,
): Pipeable<A1, Result<A1, B2 | C2 | D2 | E2 | F2 | G2>>;
export function pipe<
  A1,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
  E1,
  E2 extends Error,
  F1,
  F2 extends Error,
  G1,
  G2 extends Error,
  H1,
  H2 extends Error,
>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
  de: Pipeable<D1, Result<E1, E2>>,
  ef: Pipeable<E1, Result<F1, F2>>,
  fg: Pipeable<F1, Result<G1, G2>>,
  gh: Pipeable<G1, Result<H1, H2>>,
): Pipeable<A1, Result<A1, B2 | C2 | D2 | E2 | F2 | G2 | H2>>;
export function pipe<
  A1,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
  E1,
  E2 extends Error,
  F1,
  F2 extends Error,
  G1,
  G2 extends Error,
  H1,
  H2 extends Error,
  I1,
  I2 extends Error,
>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
  de: Pipeable<D1, Result<E1, E2>>,
  ef: Pipeable<E1, Result<F1, F2>>,
  fg: Pipeable<F1, Result<G1, G2>>,
  gh: Pipeable<G1, Result<H1, H2>>,
  hi: Pipeable<H1, Result<I1, I2>>,
): Pipeable<A1, Result<A1, B2 | C2 | D2 | E2 | F2 | G2 | H2 | I2>>;
export function pipe<
  A1,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
  E1,
  E2 extends Error,
  F1,
  F2 extends Error,
  G1,
  G2 extends Error,
  H1,
  H2 extends Error,
  I1,
  I2 extends Error,
  J1,
  J2 extends Error,
>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
  de: Pipeable<D1, Result<E1, E2>>,
  ef: Pipeable<E1, Result<F1, F2>>,
  fg: Pipeable<F1, Result<G1, G2>>,
  gh: Pipeable<G1, Result<H1, H2>>,
  hi: Pipeable<H1, Result<I1, I2>>,
  ij: Pipeable<I1, Result<J1, J2>>,
): Pipeable<A1, Result<A1, B2 | C2 | D2 | E2 | F2 | G2 | H2 | I2 | J2>>;
export function pipe<
  A1,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
  E1,
  E2 extends Error,
  F1,
  F2 extends Error,
  G1,
  G2 extends Error,
  H1,
  H2 extends Error,
  I1,
  I2 extends Error,
  J1,
  J2 extends Error,
  K1,
  K2 extends Error,
>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
  de: Pipeable<D1, Result<E1, E2>>,
  ef: Pipeable<E1, Result<F1, F2>>,
  fg: Pipeable<F1, Result<G1, G2>>,
  gh: Pipeable<G1, Result<H1, H2>>,
  hi: Pipeable<H1, Result<I1, I2>>,
  ij: Pipeable<I1, Result<J1, J2>>,
  jk: Pipeable<J1, Result<K1, K2>>,
): Pipeable<A1, Result<A1, B2 | C2 | D2 | E2 | F2 | G2 | H2 | I2 | J2 | K2>>;
export function pipe<
  A1,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
  E1,
  E2 extends Error,
  F1,
  F2 extends Error,
  G1,
  G2 extends Error,
  H1,
  H2 extends Error,
  I1,
  I2 extends Error,
  J1,
  J2 extends Error,
  K1,
  K2 extends Error,
  L1,
  L2 extends Error,
>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
  de: Pipeable<D1, Result<E1, E2>>,
  ef: Pipeable<E1, Result<F1, F2>>,
  fg: Pipeable<F1, Result<G1, G2>>,
  gh: Pipeable<G1, Result<H1, H2>>,
  hi: Pipeable<H1, Result<I1, I2>>,
  ij: Pipeable<I1, Result<J1, J2>>,
  jk: Pipeable<J1, Result<K1, K2>>,
  kl: Pipeable<K1, Result<L1, L2>>,
): Pipeable<
  A1,
  Result<A1, B2 | C2 | D2 | E2 | F2 | G2 | H2 | I2 | J2 | K2 | L2>
>;
export function pipe<
  A1,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
  E1,
  E2 extends Error,
  F1,
  F2 extends Error,
  G1,
  G2 extends Error,
  H1,
  H2 extends Error,
  I1,
  I2 extends Error,
  J1,
  J2 extends Error,
  K1,
  K2 extends Error,
  L1,
  L2 extends Error,
  M1,
  M2 extends Error,
>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
  de: Pipeable<D1, Result<E1, E2>>,
  ef: Pipeable<E1, Result<F1, F2>>,
  fg: Pipeable<F1, Result<G1, G2>>,
  gh: Pipeable<G1, Result<H1, H2>>,
  hi: Pipeable<H1, Result<I1, I2>>,
  ij: Pipeable<I1, Result<J1, J2>>,
  jk: Pipeable<J1, Result<K1, K2>>,
  kl: Pipeable<K1, Result<L1, L2>>,
  lm: Pipeable<L1, Result<M1, M2>>,
): Pipeable<
  A1,
  Result<A1, B2 | C2 | D2 | E2 | F2 | G2 | H2 | I2 | J2 | K2 | L2 | M2>
>;
export function pipe<
  A1,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
  E1,
  E2 extends Error,
  F1,
  F2 extends Error,
  G1,
  G2 extends Error,
  H1,
  H2 extends Error,
  I1,
  I2 extends Error,
  J1,
  J2 extends Error,
  K1,
  K2 extends Error,
  L1,
  L2 extends Error,
  M1,
  M2 extends Error,
  N1,
  N2 extends Error,
>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
  de: Pipeable<D1, Result<E1, E2>>,
  ef: Pipeable<E1, Result<F1, F2>>,
  fg: Pipeable<F1, Result<G1, G2>>,
  gh: Pipeable<G1, Result<H1, H2>>,
  hi: Pipeable<H1, Result<I1, I2>>,
  ij: Pipeable<I1, Result<J1, J2>>,
  jk: Pipeable<J1, Result<K1, K2>>,
  kl: Pipeable<K1, Result<L1, L2>>,
  lm: Pipeable<L1, Result<M1, M2>>,
  mn: Pipeable<M1, Result<N1, N2>>,
): Pipeable<
  A1,
  Result<A1, B2 | C2 | D2 | E2 | F2 | G2 | H2 | I2 | J2 | K2 | L2 | M2 | N2>
>;
export function pipe<
  A1,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
  E1,
  E2 extends Error,
  F1,
  F2 extends Error,
  G1,
  G2 extends Error,
  H1,
  H2 extends Error,
  I1,
  I2 extends Error,
  J1,
  J2 extends Error,
  K1,
  K2 extends Error,
  L1,
  L2 extends Error,
  M1,
  M2 extends Error,
  N1,
  N2 extends Error,
  O1,
  O2 extends Error,
>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
  de: Pipeable<D1, Result<E1, E2>>,
  ef: Pipeable<E1, Result<F1, F2>>,
  fg: Pipeable<F1, Result<G1, G2>>,
  gh: Pipeable<G1, Result<H1, H2>>,
  hi: Pipeable<H1, Result<I1, I2>>,
  ij: Pipeable<I1, Result<J1, J2>>,
  jk: Pipeable<J1, Result<K1, K2>>,
  kl: Pipeable<K1, Result<L1, L2>>,
  lm: Pipeable<L1, Result<M1, M2>>,
  mn: Pipeable<M1, Result<N1, N2>>,
  no: Pipeable<N1, Result<O1, O2>>,
): Pipeable<
  A1,
  Result<
    A1,
    B2 | C2 | D2 | E2 | F2 | G2 | H2 | I2 | J2 | K2 | L2 | M2 | N2 | O2
  >
>;
export function pipe<
  A1,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
  E1,
  E2 extends Error,
  F1,
  F2 extends Error,
  G1,
  G2 extends Error,
  H1,
  H2 extends Error,
  I1,
  I2 extends Error,
  J1,
  J2 extends Error,
  K1,
  K2 extends Error,
  L1,
  L2 extends Error,
  M1,
  M2 extends Error,
  N1,
  N2 extends Error,
  O1,
  O2 extends Error,
  P1,
  P2 extends Error,
>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
  de: Pipeable<D1, Result<E1, E2>>,
  ef: Pipeable<E1, Result<F1, F2>>,
  fg: Pipeable<F1, Result<G1, G2>>,
  gh: Pipeable<G1, Result<H1, H2>>,
  hi: Pipeable<H1, Result<I1, I2>>,
  ij: Pipeable<I1, Result<J1, J2>>,
  jk: Pipeable<J1, Result<K1, K2>>,
  kl: Pipeable<K1, Result<L1, L2>>,
  lm: Pipeable<L1, Result<M1, M2>>,
  mn: Pipeable<M1, Result<N1, N2>>,
  no: Pipeable<N1, Result<O1, O2>>,
  op: Pipeable<O1, Result<P1, P2>>,
): Pipeable<
  A1,
  Result<
    A1,
    B2 | C2 | D2 | E2 | F2 | G2 | H2 | I2 | J2 | K2 | L2 | M2 | N2 | O2 | P2
  >
>;
export function pipe<
  A1,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
  E1,
  E2 extends Error,
  F1,
  F2 extends Error,
  G1,
  G2 extends Error,
  H1,
  H2 extends Error,
  I1,
  I2 extends Error,
  J1,
  J2 extends Error,
  K1,
  K2 extends Error,
  L1,
  L2 extends Error,
  M1,
  M2 extends Error,
  N1,
  N2 extends Error,
  O1,
  O2 extends Error,
  P1,
  P2 extends Error,
  Q1,
  Q2 extends Error,
>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
  de: Pipeable<D1, Result<E1, E2>>,
  ef: Pipeable<E1, Result<F1, F2>>,
  fg: Pipeable<F1, Result<G1, G2>>,
  gh: Pipeable<G1, Result<H1, H2>>,
  hi: Pipeable<H1, Result<I1, I2>>,
  ij: Pipeable<I1, Result<J1, J2>>,
  jk: Pipeable<J1, Result<K1, K2>>,
  kl: Pipeable<K1, Result<L1, L2>>,
  lm: Pipeable<L1, Result<M1, M2>>,
  mn: Pipeable<M1, Result<N1, N2>>,
  no: Pipeable<N1, Result<O1, O2>>,
  op: Pipeable<O1, Result<P1, P2>>,
  pq: Pipeable<P1, Result<Q1, Q2>>,
): Pipeable<
  A1,
  Result<
    A1,
    | B2
    | C2
    | D2
    | E2
    | F2
    | G2
    | H2
    | I2
    | J2
    | K2
    | L2
    | M2
    | N2
    | O2
    | P2
    | Q2
  >
>;
export function pipe<
  A1,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
  E1,
  E2 extends Error,
  F1,
  F2 extends Error,
  G1,
  G2 extends Error,
  H1,
  H2 extends Error,
  I1,
  I2 extends Error,
  J1,
  J2 extends Error,
  K1,
  K2 extends Error,
  L1,
  L2 extends Error,
  M1,
  M2 extends Error,
  N1,
  N2 extends Error,
  O1,
  O2 extends Error,
  P1,
  P2 extends Error,
  Q1,
  Q2 extends Error,
  R1,
  R2 extends Error,
>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
  de: Pipeable<D1, Result<E1, E2>>,
  ef: Pipeable<E1, Result<F1, F2>>,
  fg: Pipeable<F1, Result<G1, G2>>,
  gh: Pipeable<G1, Result<H1, H2>>,
  hi: Pipeable<H1, Result<I1, I2>>,
  ij: Pipeable<I1, Result<J1, J2>>,
  jk: Pipeable<J1, Result<K1, K2>>,
  kl: Pipeable<K1, Result<L1, L2>>,
  lm: Pipeable<L1, Result<M1, M2>>,
  mn: Pipeable<M1, Result<N1, N2>>,
  no: Pipeable<N1, Result<O1, O2>>,
  op: Pipeable<O1, Result<P1, P2>>,
  pq: Pipeable<P1, Result<Q1, Q2>>,
  qr: Pipeable<Q1, Result<R1, R2>>,
): Pipeable<
  A1,
  Result<
    A1,
    | B2
    | C2
    | D2
    | E2
    | F2
    | G2
    | H2
    | I2
    | J2
    | K2
    | L2
    | M2
    | N2
    | O2
    | P2
    | Q2
    | R2
  >
>;
export function pipe<
  A1,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
  E1,
  E2 extends Error,
  F1,
  F2 extends Error,
  G1,
  G2 extends Error,
  H1,
  H2 extends Error,
  I1,
  I2 extends Error,
  J1,
  J2 extends Error,
  K1,
  K2 extends Error,
  L1,
  L2 extends Error,
  M1,
  M2 extends Error,
  N1,
  N2 extends Error,
  O1,
  O2 extends Error,
  P1,
  P2 extends Error,
  Q1,
  Q2 extends Error,
  R1,
  R2 extends Error,
  S1,
  S2 extends Error,
>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
  de: Pipeable<D1, Result<E1, E2>>,
  ef: Pipeable<E1, Result<F1, F2>>,
  fg: Pipeable<F1, Result<G1, G2>>,
  gh: Pipeable<G1, Result<H1, H2>>,
  hi: Pipeable<H1, Result<I1, I2>>,
  ij: Pipeable<I1, Result<J1, J2>>,
  jk: Pipeable<J1, Result<K1, K2>>,
  kl: Pipeable<K1, Result<L1, L2>>,
  lm: Pipeable<L1, Result<M1, M2>>,
  mn: Pipeable<M1, Result<N1, N2>>,
  no: Pipeable<N1, Result<O1, O2>>,
  op: Pipeable<O1, Result<P1, P2>>,
  pq: Pipeable<P1, Result<Q1, Q2>>,
  qr: Pipeable<Q1, Result<R1, R2>>,
  rs: Pipeable<R1, Result<S1, S2>>,
): Pipeable<
  A1,
  Result<
    A1,
    | B2
    | C2
    | D2
    | E2
    | F2
    | G2
    | H2
    | I2
    | J2
    | K2
    | L2
    | M2
    | N2
    | O2
    | P2
    | Q2
    | R2
    | S2
  >
>;
export function pipe<
  A1,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
  E1,
  E2 extends Error,
  F1,
  F2 extends Error,
  G1,
  G2 extends Error,
  H1,
  H2 extends Error,
  I1,
  I2 extends Error,
  J1,
  J2 extends Error,
  K1,
  K2 extends Error,
  L1,
  L2 extends Error,
  M1,
  M2 extends Error,
  N1,
  N2 extends Error,
  O1,
  O2 extends Error,
  P1,
  P2 extends Error,
  Q1,
  Q2 extends Error,
  R1,
  R2 extends Error,
  S1,
  S2 extends Error,
  T1,
  T2 extends Error,
>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
  de: Pipeable<D1, Result<E1, E2>>,
  ef: Pipeable<E1, Result<F1, F2>>,
  fg: Pipeable<F1, Result<G1, G2>>,
  gh: Pipeable<G1, Result<H1, H2>>,
  hi: Pipeable<H1, Result<I1, I2>>,
  ij: Pipeable<I1, Result<J1, J2>>,
  jk: Pipeable<J1, Result<K1, K2>>,
  kl: Pipeable<K1, Result<L1, L2>>,
  lm: Pipeable<L1, Result<M1, M2>>,
  mn: Pipeable<M1, Result<N1, N2>>,
  no: Pipeable<N1, Result<O1, O2>>,
  op: Pipeable<O1, Result<P1, P2>>,
  pq: Pipeable<P1, Result<Q1, Q2>>,
  qr: Pipeable<Q1, Result<R1, R2>>,
  rs: Pipeable<R1, Result<S1, S2>>,
  st: Pipeable<S1, Result<T1, T2>>,
): Pipeable<
  A1,
  Result<
    A1,
    | B2
    | C2
    | D2
    | E2
    | F2
    | G2
    | H2
    | I2
    | J2
    | K2
    | L2
    | M2
    | N2
    | O2
    | P2
    | Q2
    | R2
    | S2
    | T2
  >
>;
export function pipe<
  A1,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
  E1,
  E2 extends Error,
  F1,
  F2 extends Error,
  G1,
  G2 extends Error,
  H1,
  H2 extends Error,
  I1,
  I2 extends Error,
  J1,
  J2 extends Error,
  K1,
  K2 extends Error,
  L1,
  L2 extends Error,
  M1,
  M2 extends Error,
  N1,
  N2 extends Error,
  O1,
  O2 extends Error,
  P1,
  P2 extends Error,
  Q1,
  Q2 extends Error,
  R1,
  R2 extends Error,
  S1,
  S2 extends Error,
  T1,
  T2 extends Error,
  U1,
  U2 extends Error,
>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
  de: Pipeable<D1, Result<E1, E2>>,
  ef: Pipeable<E1, Result<F1, F2>>,
  fg: Pipeable<F1, Result<G1, G2>>,
  gh: Pipeable<G1, Result<H1, H2>>,
  hi: Pipeable<H1, Result<I1, I2>>,
  ij: Pipeable<I1, Result<J1, J2>>,
  jk: Pipeable<J1, Result<K1, K2>>,
  kl: Pipeable<K1, Result<L1, L2>>,
  lm: Pipeable<L1, Result<M1, M2>>,
  mn: Pipeable<M1, Result<N1, N2>>,
  no: Pipeable<N1, Result<O1, O2>>,
  op: Pipeable<O1, Result<P1, P2>>,
  pq: Pipeable<P1, Result<Q1, Q2>>,
  qr: Pipeable<Q1, Result<R1, R2>>,
  rs: Pipeable<R1, Result<S1, S2>>,
  st: Pipeable<S1, Result<T1, T2>>,
  tu: Pipeable<T1, Result<U1, U2>>,
): Pipeable<
  A1,
  Result<
    A1,
    | B2
    | C2
    | D2
    | E2
    | F2
    | G2
    | H2
    | I2
    | J2
    | K2
    | L2
    | M2
    | N2
    | O2
    | P2
    | Q2
    | R2
    | S2
    | T2
    | U2
  >
>;
export function pipe<
  A1,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
  E1,
  E2 extends Error,
  F1,
  F2 extends Error,
  G1,
  G2 extends Error,
  H1,
  H2 extends Error,
  I1,
  I2 extends Error,
  J1,
  J2 extends Error,
  K1,
  K2 extends Error,
  L1,
  L2 extends Error,
  M1,
  M2 extends Error,
  N1,
  N2 extends Error,
  O1,
  O2 extends Error,
  P1,
  P2 extends Error,
  Q1,
  Q2 extends Error,
  R1,
  R2 extends Error,
  S1,
  S2 extends Error,
  T1,
  T2 extends Error,
  U1,
  U2 extends Error,
  V1,
  V2 extends Error,
>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
  de: Pipeable<D1, Result<E1, E2>>,
  ef: Pipeable<E1, Result<F1, F2>>,
  fg: Pipeable<F1, Result<G1, G2>>,
  gh: Pipeable<G1, Result<H1, H2>>,
  hi: Pipeable<H1, Result<I1, I2>>,
  ij: Pipeable<I1, Result<J1, J2>>,
  jk: Pipeable<J1, Result<K1, K2>>,
  kl: Pipeable<K1, Result<L1, L2>>,
  lm: Pipeable<L1, Result<M1, M2>>,
  mn: Pipeable<M1, Result<N1, N2>>,
  no: Pipeable<N1, Result<O1, O2>>,
  op: Pipeable<O1, Result<P1, P2>>,
  pq: Pipeable<P1, Result<Q1, Q2>>,
  qr: Pipeable<Q1, Result<R1, R2>>,
  rs: Pipeable<R1, Result<S1, S2>>,
  st: Pipeable<S1, Result<T1, T2>>,
  tu: Pipeable<T1, Result<U1, U2>>,
  uv: Pipeable<U1, Result<V1, V2>>,
): Pipeable<
  A1,
  Result<
    A1,
    | B2
    | C2
    | D2
    | E2
    | F2
    | G2
    | H2
    | I2
    | J2
    | K2
    | L2
    | M2
    | N2
    | O2
    | P2
    | Q2
    | R2
    | S2
    | T2
    | U2
    | V2
  >
>;
export function pipe<
  A1,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
  E1,
  E2 extends Error,
  F1,
  F2 extends Error,
  G1,
  G2 extends Error,
  H1,
  H2 extends Error,
  I1,
  I2 extends Error,
  J1,
  J2 extends Error,
  K1,
  K2 extends Error,
  L1,
  L2 extends Error,
  M1,
  M2 extends Error,
  N1,
  N2 extends Error,
  O1,
  O2 extends Error,
  P1,
  P2 extends Error,
  Q1,
  Q2 extends Error,
  R1,
  R2 extends Error,
  S1,
  S2 extends Error,
  T1,
  T2 extends Error,
  U1,
  U2 extends Error,
  V1,
  V2 extends Error,
  W1,
  W2 extends Error,
>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
  de: Pipeable<D1, Result<E1, E2>>,
  ef: Pipeable<E1, Result<F1, F2>>,
  fg: Pipeable<F1, Result<G1, G2>>,
  gh: Pipeable<G1, Result<H1, H2>>,
  hi: Pipeable<H1, Result<I1, I2>>,
  ij: Pipeable<I1, Result<J1, J2>>,
  jk: Pipeable<J1, Result<K1, K2>>,
  kl: Pipeable<K1, Result<L1, L2>>,
  lm: Pipeable<L1, Result<M1, M2>>,
  mn: Pipeable<M1, Result<N1, N2>>,
  no: Pipeable<N1, Result<O1, O2>>,
  op: Pipeable<O1, Result<P1, P2>>,
  pq: Pipeable<P1, Result<Q1, Q2>>,
  qr: Pipeable<Q1, Result<R1, R2>>,
  rs: Pipeable<R1, Result<S1, S2>>,
  st: Pipeable<S1, Result<T1, T2>>,
  tu: Pipeable<T1, Result<U1, U2>>,
  uv: Pipeable<U1, Result<V1, V2>>,
  vw: Pipeable<V1, Result<W1, W2>>,
): Pipeable<
  A1,
  Result<
    A1,
    | B2
    | C2
    | D2
    | E2
    | F2
    | G2
    | H2
    | I2
    | J2
    | K2
    | L2
    | M2
    | N2
    | O2
    | P2
    | Q2
    | R2
    | S2
    | T2
    | U2
    | V2
    | W2
  >
>;
export function pipe<
  A1,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
  E1,
  E2 extends Error,
  F1,
  F2 extends Error,
  G1,
  G2 extends Error,
  H1,
  H2 extends Error,
  I1,
  I2 extends Error,
  J1,
  J2 extends Error,
  K1,
  K2 extends Error,
  L1,
  L2 extends Error,
  M1,
  M2 extends Error,
  N1,
  N2 extends Error,
  O1,
  O2 extends Error,
  P1,
  P2 extends Error,
  Q1,
  Q2 extends Error,
  R1,
  R2 extends Error,
  S1,
  S2 extends Error,
  T1,
  T2 extends Error,
  U1,
  U2 extends Error,
  V1,
  V2 extends Error,
  W1,
  W2 extends Error,
  X1,
  X2 extends Error,
>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
  de: Pipeable<D1, Result<E1, E2>>,
  ef: Pipeable<E1, Result<F1, F2>>,
  fg: Pipeable<F1, Result<G1, G2>>,
  gh: Pipeable<G1, Result<H1, H2>>,
  hi: Pipeable<H1, Result<I1, I2>>,
  ij: Pipeable<I1, Result<J1, J2>>,
  jk: Pipeable<J1, Result<K1, K2>>,
  kl: Pipeable<K1, Result<L1, L2>>,
  lm: Pipeable<L1, Result<M1, M2>>,
  mn: Pipeable<M1, Result<N1, N2>>,
  no: Pipeable<N1, Result<O1, O2>>,
  op: Pipeable<O1, Result<P1, P2>>,
  pq: Pipeable<P1, Result<Q1, Q2>>,
  qr: Pipeable<Q1, Result<R1, R2>>,
  rs: Pipeable<R1, Result<S1, S2>>,
  st: Pipeable<S1, Result<T1, T2>>,
  tu: Pipeable<T1, Result<U1, U2>>,
  uv: Pipeable<U1, Result<V1, V2>>,
  vw: Pipeable<V1, Result<W1, W2>>,
  wx: Pipeable<W1, Result<X1, X2>>,
): Pipeable<
  A1,
  Result<
    A1,
    | B2
    | C2
    | D2
    | E2
    | F2
    | G2
    | H2
    | I2
    | J2
    | K2
    | L2
    | M2
    | N2
    | O2
    | P2
    | Q2
    | R2
    | S2
    | T2
    | U2
    | V2
    | W2
    | X2
  >
>;
export function pipe<
  A1,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
  E1,
  E2 extends Error,
  F1,
  F2 extends Error,
  G1,
  G2 extends Error,
  H1,
  H2 extends Error,
  I1,
  I2 extends Error,
  J1,
  J2 extends Error,
  K1,
  K2 extends Error,
  L1,
  L2 extends Error,
  M1,
  M2 extends Error,
  N1,
  N2 extends Error,
  O1,
  O2 extends Error,
  P1,
  P2 extends Error,
  Q1,
  Q2 extends Error,
  R1,
  R2 extends Error,
  S1,
  S2 extends Error,
  T1,
  T2 extends Error,
  U1,
  U2 extends Error,
  V1,
  V2 extends Error,
  W1,
  W2 extends Error,
  X1,
  X2 extends Error,
  Y1,
  Y2 extends Error,
>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<B1, Result<C1, C2>>,
  cd: Pipeable<C1, Result<D1, D2>>,
  de: Pipeable<D1, Result<E1, E2>>,
  ef: Pipeable<E1, Result<F1, F2>>,
  fg: Pipeable<F1, Result<G1, G2>>,
  gh: Pipeable<G1, Result<H1, H2>>,
  hi: Pipeable<H1, Result<I1, I2>>,
  ij: Pipeable<I1, Result<J1, J2>>,
  jk: Pipeable<J1, Result<K1, K2>>,
  kl: Pipeable<K1, Result<L1, L2>>,
  lm: Pipeable<L1, Result<M1, M2>>,
  mn: Pipeable<M1, Result<N1, N2>>,
  no: Pipeable<N1, Result<O1, O2>>,
  op: Pipeable<O1, Result<P1, P2>>,
  pq: Pipeable<P1, Result<Q1, Q2>>,
  qr: Pipeable<Q1, Result<R1, R2>>,
  rs: Pipeable<R1, Result<S1, S2>>,
  st: Pipeable<S1, Result<T1, T2>>,
  tu: Pipeable<T1, Result<U1, U2>>,
  uv: Pipeable<U1, Result<V1, V2>>,
  vw: Pipeable<V1, Result<W1, W2>>,
  wx: Pipeable<W1, Result<X1, X2>>,
  xy: Pipeable<X1, Result<Y1, Y2>>,
): Pipeable<
  A1,
  Result<
    A1,
    | B2
    | C2
    | D2
    | E2
    | F2
    | G2
    | H2
    | I2
    | J2
    | K2
    | L2
    | M2
    | N2
    | O2
    | P2
    | Q2
    | R2
    | S2
    | T2
    | U2
    | V2
    | W2
    | X2
    | Y2
  >
>;
export function pipe(...pipeables: Pipeable[]) {
  const length = pipeables.length;

  return (value: unknown) => {
    let latest = value;

    for (let i = 0; i < length; ++i) {
      const result = pipeables[i](latest);

      if (isErr(result)) {
        return result;
      }

      latest = getOk(result);
    }

    return ok(latest);
  };
}

export const and = pipe;
