import { Result, err, isOk } from "elfs";
import { Error, Pipeable } from "../types";
import { error } from "../utils";

export function or<A1, B1, B2 extends Error>(
  ab: Pipeable<A1, Result<B1, B2>>,
): Pipeable<A1, Result<B1, Error<"OR", B1>>>;
export function or<A1, B1, B2 extends Error, C1, C2 extends Error>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<A1, Result<C1, C2>>,
): Pipeable<A1, Result<B1 | C1, Error<"OR", B1 | C1>>>;
export function or<
  A1,
  B1,
  B2 extends Error,
  C1,
  C2 extends Error,
  D1,
  D2 extends Error,
>(
  ab: Pipeable<A1, Result<B1, B2>>,
  bc: Pipeable<A1, Result<C1, C2>>,
  cd: Pipeable<A1, Result<D1, D2>>,
): Pipeable<A1, Result<B1 | C1 | D1, Error<"OR", B1 | C1 | D1>>>;
export function or<
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
  bc: Pipeable<A1, Result<C1, C2>>,
  cd: Pipeable<A1, Result<D1, D2>>,
  de: Pipeable<A1, Result<E1, E2>>,
): Pipeable<A1, Result<B1 | C1 | D1 | E1, Error<"OR", B1 | C1 | D1 | E1>>>;
export function or<
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
  bc: Pipeable<A1, Result<C1, C2>>,
  cd: Pipeable<A1, Result<D1, D2>>,
  de: Pipeable<A1, Result<E1, E2>>,
  ef: Pipeable<A1, Result<F1, F2>>,
): Pipeable<
  A1,
  Result<B1 | C1 | D1 | E1 | F1, Error<"OR", B1 | C1 | D1 | E1 | F1>>
>;
export function or<
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
  bc: Pipeable<A1, Result<C1, C2>>,
  cd: Pipeable<A1, Result<D1, D2>>,
  de: Pipeable<A1, Result<E1, E2>>,
  ef: Pipeable<A1, Result<F1, F2>>,
  fg: Pipeable<A1, Result<G1, G2>>,
): Pipeable<
  A1,
  Result<B1 | C1 | D1 | E1 | F1 | G1, Error<"OR", B1 | C1 | D1 | E1 | F1 | G1>>
>;
export function or<
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
  bc: Pipeable<A1, Result<C1, C2>>,
  cd: Pipeable<A1, Result<D1, D2>>,
  de: Pipeable<A1, Result<E1, E2>>,
  ef: Pipeable<A1, Result<F1, F2>>,
  fg: Pipeable<A1, Result<G1, G2>>,
  gh: Pipeable<A1, Result<H1, H2>>,
): Pipeable<
  A1,
  Result<
    B1 | C1 | D1 | E1 | F1 | G1 | H1,
    Error<"OR", B1 | C1 | D1 | E1 | F1 | G1 | H1>
  >
>;
export function or<
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
  bc: Pipeable<A1, Result<C1, C2>>,
  cd: Pipeable<A1, Result<D1, D2>>,
  de: Pipeable<A1, Result<E1, E2>>,
  ef: Pipeable<A1, Result<F1, F2>>,
  fg: Pipeable<A1, Result<G1, G2>>,
  gh: Pipeable<A1, Result<H1, H2>>,
  hi: Pipeable<A1, Result<I1, I2>>,
): Pipeable<
  A1,
  Result<
    B1 | C1 | D1 | E1 | F1 | G1 | H1 | I1,
    Error<"OR", B1 | C1 | D1 | E1 | F1 | G1 | H1 | I1>
  >
>;
export function or<
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
  bc: Pipeable<A1, Result<C1, C2>>,
  cd: Pipeable<A1, Result<D1, D2>>,
  de: Pipeable<A1, Result<E1, E2>>,
  ef: Pipeable<A1, Result<F1, F2>>,
  fg: Pipeable<A1, Result<G1, G2>>,
  gh: Pipeable<A1, Result<H1, H2>>,
  hi: Pipeable<A1, Result<I1, I2>>,
  ij: Pipeable<A1, Result<J1, J2>>,
): Pipeable<
  A1,
  Result<
    B1 | C1 | D1 | E1 | F1 | G1 | H1 | I1 | J1,
    Error<"OR", B1 | C1 | D1 | E1 | F1 | G1 | H1 | I1 | J1>
  >
>;
export function or<
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
  bc: Pipeable<A1, Result<C1, C2>>,
  cd: Pipeable<A1, Result<D1, D2>>,
  de: Pipeable<A1, Result<E1, E2>>,
  ef: Pipeable<A1, Result<F1, F2>>,
  fg: Pipeable<A1, Result<G1, G2>>,
  gh: Pipeable<A1, Result<H1, H2>>,
  hi: Pipeable<A1, Result<I1, I2>>,
  ij: Pipeable<A1, Result<J1, J2>>,
  jk: Pipeable<A1, Result<K1, K2>>,
): Pipeable<
  A1,
  Result<
    B1 | C1 | D1 | E1 | F1 | G1 | H1 | I1 | J1 | K1,
    Error<"OR", B1 | C1 | D1 | E1 | F1 | G1 | H1 | I1 | J1 | K1>
  >
>;
export function or<
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
  bc: Pipeable<A1, Result<C1, C2>>,
  cd: Pipeable<A1, Result<D1, D2>>,
  de: Pipeable<A1, Result<E1, E2>>,
  ef: Pipeable<A1, Result<F1, F2>>,
  fg: Pipeable<A1, Result<G1, G2>>,
  gh: Pipeable<A1, Result<H1, H2>>,
  hi: Pipeable<A1, Result<I1, I2>>,
  ij: Pipeable<A1, Result<J1, J2>>,
  jk: Pipeable<A1, Result<K1, K2>>,
  kl: Pipeable<A1, Result<L1, L2>>,
): Pipeable<
  A1,
  Result<
    B1 | C1 | D1 | E1 | F1 | G1 | H1 | I1 | J1 | K1 | L1,
    Error<"OR", B1 | C1 | D1 | E1 | F1 | G1 | H1 | I1 | J1 | K1 | L1>
  >
>;
export function or<
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
  bc: Pipeable<A1, Result<C1, C2>>,
  cd: Pipeable<A1, Result<D1, D2>>,
  de: Pipeable<A1, Result<E1, E2>>,
  ef: Pipeable<A1, Result<F1, F2>>,
  fg: Pipeable<A1, Result<G1, G2>>,
  gh: Pipeable<A1, Result<H1, H2>>,
  hi: Pipeable<A1, Result<I1, I2>>,
  ij: Pipeable<A1, Result<J1, J2>>,
  jk: Pipeable<A1, Result<K1, K2>>,
  kl: Pipeable<A1, Result<L1, L2>>,
  lm: Pipeable<A1, Result<M1, M2>>,
): Pipeable<
  A1,
  Result<
    B1 | C1 | D1 | E1 | F1 | G1 | H1 | I1 | J1 | K1 | L1 | M1,
    Error<"OR", B1 | C1 | D1 | E1 | F1 | G1 | H1 | I1 | J1 | K1 | L1 | M1>
  >
>;
export function or<
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
  bc: Pipeable<A1, Result<C1, C2>>,
  cd: Pipeable<A1, Result<D1, D2>>,
  de: Pipeable<A1, Result<E1, E2>>,
  ef: Pipeable<A1, Result<F1, F2>>,
  fg: Pipeable<A1, Result<G1, G2>>,
  gh: Pipeable<A1, Result<H1, H2>>,
  hi: Pipeable<A1, Result<I1, I2>>,
  ij: Pipeable<A1, Result<J1, J2>>,
  jk: Pipeable<A1, Result<K1, K2>>,
  kl: Pipeable<A1, Result<L1, L2>>,
  lm: Pipeable<A1, Result<M1, M2>>,
  mn: Pipeable<A1, Result<N1, N2>>,
): Pipeable<
  A1,
  Result<
    B1 | C1 | D1 | E1 | F1 | G1 | H1 | I1 | J1 | K1 | L1 | M1 | N1,
    Error<"OR", B1 | C1 | D1 | E1 | F1 | G1 | H1 | I1 | J1 | K1 | L1 | M1 | N1>
  >
>;
export function or<
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
  bc: Pipeable<A1, Result<C1, C2>>,
  cd: Pipeable<A1, Result<D1, D2>>,
  de: Pipeable<A1, Result<E1, E2>>,
  ef: Pipeable<A1, Result<F1, F2>>,
  fg: Pipeable<A1, Result<G1, G2>>,
  gh: Pipeable<A1, Result<H1, H2>>,
  hi: Pipeable<A1, Result<I1, I2>>,
  ij: Pipeable<A1, Result<J1, J2>>,
  jk: Pipeable<A1, Result<K1, K2>>,
  kl: Pipeable<A1, Result<L1, L2>>,
  lm: Pipeable<A1, Result<M1, M2>>,
  mn: Pipeable<A1, Result<N1, N2>>,
  no: Pipeable<A1, Result<O1, O2>>,
): Pipeable<
  A1,
  Result<
    B1 | C1 | D1 | E1 | F1 | G1 | H1 | I1 | J1 | K1 | L1 | M1 | N1 | O1,
    Error<
      "OR",
      B1 | C1 | D1 | E1 | F1 | G1 | H1 | I1 | J1 | K1 | L1 | M1 | N1 | O1
    >
  >
>;
export function or<
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
  bc: Pipeable<A1, Result<C1, C2>>,
  cd: Pipeable<A1, Result<D1, D2>>,
  de: Pipeable<A1, Result<E1, E2>>,
  ef: Pipeable<A1, Result<F1, F2>>,
  fg: Pipeable<A1, Result<G1, G2>>,
  gh: Pipeable<A1, Result<H1, H2>>,
  hi: Pipeable<A1, Result<I1, I2>>,
  ij: Pipeable<A1, Result<J1, J2>>,
  jk: Pipeable<A1, Result<K1, K2>>,
  kl: Pipeable<A1, Result<L1, L2>>,
  lm: Pipeable<A1, Result<M1, M2>>,
  mn: Pipeable<A1, Result<N1, N2>>,
  no: Pipeable<A1, Result<O1, O2>>,
  op: Pipeable<A1, Result<P1, P2>>,
): Pipeable<
  A1,
  Result<
    B1 | C1 | D1 | E1 | F1 | G1 | H1 | I1 | J1 | K1 | L1 | M1 | N1 | O1 | P1,
    Error<
      "OR",
      B1 | C1 | D1 | E1 | F1 | G1 | H1 | I1 | J1 | K1 | L1 | M1 | N1 | O1 | P1
    >
  >
>;
export function or<
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
  bc: Pipeable<A1, Result<C1, C2>>,
  cd: Pipeable<A1, Result<D1, D2>>,
  de: Pipeable<A1, Result<E1, E2>>,
  ef: Pipeable<A1, Result<F1, F2>>,
  fg: Pipeable<A1, Result<G1, G2>>,
  gh: Pipeable<A1, Result<H1, H2>>,
  hi: Pipeable<A1, Result<I1, I2>>,
  ij: Pipeable<A1, Result<J1, J2>>,
  jk: Pipeable<A1, Result<K1, K2>>,
  kl: Pipeable<A1, Result<L1, L2>>,
  lm: Pipeable<A1, Result<M1, M2>>,
  mn: Pipeable<A1, Result<N1, N2>>,
  no: Pipeable<A1, Result<O1, O2>>,
  op: Pipeable<A1, Result<P1, P2>>,
  pq: Pipeable<A1, Result<Q1, Q2>>,
): Pipeable<
  A1,
  Result<
    | B1
    | C1
    | D1
    | E1
    | F1
    | G1
    | H1
    | I1
    | J1
    | K1
    | L1
    | M1
    | N1
    | O1
    | P1
    | Q1,
    Error<
      "OR",
      | B1
      | C1
      | D1
      | E1
      | F1
      | G1
      | H1
      | I1
      | J1
      | K1
      | L1
      | M1
      | N1
      | O1
      | P1
      | Q1
    >
  >
>;
export function or<
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
  bc: Pipeable<A1, Result<C1, C2>>,
  cd: Pipeable<A1, Result<D1, D2>>,
  de: Pipeable<A1, Result<E1, E2>>,
  ef: Pipeable<A1, Result<F1, F2>>,
  fg: Pipeable<A1, Result<G1, G2>>,
  gh: Pipeable<A1, Result<H1, H2>>,
  hi: Pipeable<A1, Result<I1, I2>>,
  ij: Pipeable<A1, Result<J1, J2>>,
  jk: Pipeable<A1, Result<K1, K2>>,
  kl: Pipeable<A1, Result<L1, L2>>,
  lm: Pipeable<A1, Result<M1, M2>>,
  mn: Pipeable<A1, Result<N1, N2>>,
  no: Pipeable<A1, Result<O1, O2>>,
  op: Pipeable<A1, Result<P1, P2>>,
  pq: Pipeable<A1, Result<Q1, Q2>>,
  qr: Pipeable<A1, Result<R1, R2>>,
): Pipeable<
  A1,
  Result<
    | B1
    | C1
    | D1
    | E1
    | F1
    | G1
    | H1
    | I1
    | J1
    | K1
    | L1
    | M1
    | N1
    | O1
    | P1
    | Q1
    | R1,
    Error<
      "OR",
      | B1
      | C1
      | D1
      | E1
      | F1
      | G1
      | H1
      | I1
      | J1
      | K1
      | L1
      | M1
      | N1
      | O1
      | P1
      | Q1
      | R1
    >
  >
>;
export function or<
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
  bc: Pipeable<A1, Result<C1, C2>>,
  cd: Pipeable<A1, Result<D1, D2>>,
  de: Pipeable<A1, Result<E1, E2>>,
  ef: Pipeable<A1, Result<F1, F2>>,
  fg: Pipeable<A1, Result<G1, G2>>,
  gh: Pipeable<A1, Result<H1, H2>>,
  hi: Pipeable<A1, Result<I1, I2>>,
  ij: Pipeable<A1, Result<J1, J2>>,
  jk: Pipeable<A1, Result<K1, K2>>,
  kl: Pipeable<A1, Result<L1, L2>>,
  lm: Pipeable<A1, Result<M1, M2>>,
  mn: Pipeable<A1, Result<N1, N2>>,
  no: Pipeable<A1, Result<O1, O2>>,
  op: Pipeable<A1, Result<P1, P2>>,
  pq: Pipeable<A1, Result<Q1, Q2>>,
  qr: Pipeable<A1, Result<R1, R2>>,
  rs: Pipeable<A1, Result<S1, S2>>,
): Pipeable<
  A1,
  Result<
    | B1
    | C1
    | D1
    | E1
    | F1
    | G1
    | H1
    | I1
    | J1
    | K1
    | L1
    | M1
    | N1
    | O1
    | P1
    | Q1
    | R1
    | S1,
    Error<
      "OR",
      | B1
      | C1
      | D1
      | E1
      | F1
      | G1
      | H1
      | I1
      | J1
      | K1
      | L1
      | M1
      | N1
      | O1
      | P1
      | Q1
      | R1
      | S1
    >
  >
>;
export function or<
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
  bc: Pipeable<A1, Result<C1, C2>>,
  cd: Pipeable<A1, Result<D1, D2>>,
  de: Pipeable<A1, Result<E1, E2>>,
  ef: Pipeable<A1, Result<F1, F2>>,
  fg: Pipeable<A1, Result<G1, G2>>,
  gh: Pipeable<A1, Result<H1, H2>>,
  hi: Pipeable<A1, Result<I1, I2>>,
  ij: Pipeable<A1, Result<J1, J2>>,
  jk: Pipeable<A1, Result<K1, K2>>,
  kl: Pipeable<A1, Result<L1, L2>>,
  lm: Pipeable<A1, Result<M1, M2>>,
  mn: Pipeable<A1, Result<N1, N2>>,
  no: Pipeable<A1, Result<O1, O2>>,
  op: Pipeable<A1, Result<P1, P2>>,
  pq: Pipeable<A1, Result<Q1, Q2>>,
  qr: Pipeable<A1, Result<R1, R2>>,
  rs: Pipeable<A1, Result<S1, S2>>,
  st: Pipeable<A1, Result<T1, T2>>,
): Pipeable<
  A1,
  Result<
    | B1
    | C1
    | D1
    | E1
    | F1
    | G1
    | H1
    | I1
    | J1
    | K1
    | L1
    | M1
    | N1
    | O1
    | P1
    | Q1
    | R1
    | S1
    | T1,
    Error<
      "OR",
      | B1
      | C1
      | D1
      | E1
      | F1
      | G1
      | H1
      | I1
      | J1
      | K1
      | L1
      | M1
      | N1
      | O1
      | P1
      | Q1
      | R1
      | S1
      | T1
    >
  >
>;
export function or<
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
  bc: Pipeable<A1, Result<C1, C2>>,
  cd: Pipeable<A1, Result<D1, D2>>,
  de: Pipeable<A1, Result<E1, E2>>,
  ef: Pipeable<A1, Result<F1, F2>>,
  fg: Pipeable<A1, Result<G1, G2>>,
  gh: Pipeable<A1, Result<H1, H2>>,
  hi: Pipeable<A1, Result<I1, I2>>,
  ij: Pipeable<A1, Result<J1, J2>>,
  jk: Pipeable<A1, Result<K1, K2>>,
  kl: Pipeable<A1, Result<L1, L2>>,
  lm: Pipeable<A1, Result<M1, M2>>,
  mn: Pipeable<A1, Result<N1, N2>>,
  no: Pipeable<A1, Result<O1, O2>>,
  op: Pipeable<A1, Result<P1, P2>>,
  pq: Pipeable<A1, Result<Q1, Q2>>,
  qr: Pipeable<A1, Result<R1, R2>>,
  rs: Pipeable<A1, Result<S1, S2>>,
  st: Pipeable<A1, Result<T1, T2>>,
  tu: Pipeable<A1, Result<U1, U2>>,
): Pipeable<
  A1,
  Result<
    | B1
    | C1
    | D1
    | E1
    | F1
    | G1
    | H1
    | I1
    | J1
    | K1
    | L1
    | M1
    | N1
    | O1
    | P1
    | Q1
    | R1
    | S1
    | T1
    | U1,
    Error<
      "OR",
      | B1
      | C1
      | D1
      | E1
      | F1
      | G1
      | H1
      | I1
      | J1
      | K1
      | L1
      | M1
      | N1
      | O1
      | P1
      | Q1
      | R1
      | S1
      | T1
      | U1
    >
  >
>;
export function or<
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
  bc: Pipeable<A1, Result<C1, C2>>,
  cd: Pipeable<A1, Result<D1, D2>>,
  de: Pipeable<A1, Result<E1, E2>>,
  ef: Pipeable<A1, Result<F1, F2>>,
  fg: Pipeable<A1, Result<G1, G2>>,
  gh: Pipeable<A1, Result<H1, H2>>,
  hi: Pipeable<A1, Result<I1, I2>>,
  ij: Pipeable<A1, Result<J1, J2>>,
  jk: Pipeable<A1, Result<K1, K2>>,
  kl: Pipeable<A1, Result<L1, L2>>,
  lm: Pipeable<A1, Result<M1, M2>>,
  mn: Pipeable<A1, Result<N1, N2>>,
  no: Pipeable<A1, Result<O1, O2>>,
  op: Pipeable<A1, Result<P1, P2>>,
  pq: Pipeable<A1, Result<Q1, Q2>>,
  qr: Pipeable<A1, Result<R1, R2>>,
  rs: Pipeable<A1, Result<S1, S2>>,
  st: Pipeable<A1, Result<T1, T2>>,
  tu: Pipeable<A1, Result<U1, U2>>,
  uv: Pipeable<A1, Result<V1, V2>>,
): Pipeable<
  A1,
  Result<
    | B1
    | C1
    | D1
    | E1
    | F1
    | G1
    | H1
    | I1
    | J1
    | K1
    | L1
    | M1
    | N1
    | O1
    | P1
    | Q1
    | R1
    | S1
    | T1
    | U1
    | V1,
    Error<
      "OR",
      | B1
      | C1
      | D1
      | E1
      | F1
      | G1
      | H1
      | I1
      | J1
      | K1
      | L1
      | M1
      | N1
      | O1
      | P1
      | Q1
      | R1
      | S1
      | T1
      | U1
      | V1
    >
  >
>;
export function or<
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
  bc: Pipeable<A1, Result<C1, C2>>,
  cd: Pipeable<A1, Result<D1, D2>>,
  de: Pipeable<A1, Result<E1, E2>>,
  ef: Pipeable<A1, Result<F1, F2>>,
  fg: Pipeable<A1, Result<G1, G2>>,
  gh: Pipeable<A1, Result<H1, H2>>,
  hi: Pipeable<A1, Result<I1, I2>>,
  ij: Pipeable<A1, Result<J1, J2>>,
  jk: Pipeable<A1, Result<K1, K2>>,
  kl: Pipeable<A1, Result<L1, L2>>,
  lm: Pipeable<A1, Result<M1, M2>>,
  mn: Pipeable<A1, Result<N1, N2>>,
  no: Pipeable<A1, Result<O1, O2>>,
  op: Pipeable<A1, Result<P1, P2>>,
  pq: Pipeable<A1, Result<Q1, Q2>>,
  qr: Pipeable<A1, Result<R1, R2>>,
  rs: Pipeable<A1, Result<S1, S2>>,
  st: Pipeable<A1, Result<T1, T2>>,
  tu: Pipeable<A1, Result<U1, U2>>,
  uv: Pipeable<A1, Result<V1, V2>>,
  vw: Pipeable<A1, Result<W1, W2>>,
): Pipeable<
  A1,
  Result<
    | B1
    | C1
    | D1
    | E1
    | F1
    | G1
    | H1
    | I1
    | J1
    | K1
    | L1
    | M1
    | N1
    | O1
    | P1
    | Q1
    | R1
    | S1
    | T1
    | U1
    | V1
    | W1,
    Error<
      "OR",
      | B1
      | C1
      | D1
      | E1
      | F1
      | G1
      | H1
      | I1
      | J1
      | K1
      | L1
      | M1
      | N1
      | O1
      | P1
      | Q1
      | R1
      | S1
      | T1
      | U1
      | V1
      | W1
    >
  >
>;
export function or<
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
  bc: Pipeable<A1, Result<C1, C2>>,
  cd: Pipeable<A1, Result<D1, D2>>,
  de: Pipeable<A1, Result<E1, E2>>,
  ef: Pipeable<A1, Result<F1, F2>>,
  fg: Pipeable<A1, Result<G1, G2>>,
  gh: Pipeable<A1, Result<H1, H2>>,
  hi: Pipeable<A1, Result<I1, I2>>,
  ij: Pipeable<A1, Result<J1, J2>>,
  jk: Pipeable<A1, Result<K1, K2>>,
  kl: Pipeable<A1, Result<L1, L2>>,
  lm: Pipeable<A1, Result<M1, M2>>,
  mn: Pipeable<A1, Result<N1, N2>>,
  no: Pipeable<A1, Result<O1, O2>>,
  op: Pipeable<A1, Result<P1, P2>>,
  pq: Pipeable<A1, Result<Q1, Q2>>,
  qr: Pipeable<A1, Result<R1, R2>>,
  rs: Pipeable<A1, Result<S1, S2>>,
  st: Pipeable<A1, Result<T1, T2>>,
  tu: Pipeable<A1, Result<U1, U2>>,
  uv: Pipeable<A1, Result<V1, V2>>,
  vw: Pipeable<A1, Result<W1, W2>>,
  wx: Pipeable<A1, Result<X1, X2>>,
): Pipeable<
  A1,
  Result<
    | B1
    | C1
    | D1
    | E1
    | F1
    | G1
    | H1
    | I1
    | J1
    | K1
    | L1
    | M1
    | N1
    | O1
    | P1
    | Q1
    | R1
    | S1
    | T1
    | U1
    | V1
    | W1
    | X1,
    Error<
      "OR",
      | B1
      | C1
      | D1
      | E1
      | F1
      | G1
      | H1
      | I1
      | J1
      | K1
      | L1
      | M1
      | N1
      | O1
      | P1
      | Q1
      | R1
      | S1
      | T1
      | U1
      | V1
      | W1
      | X1
    >
  >
>;
export function or<
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
  bc: Pipeable<A1, Result<C1, C2>>,
  cd: Pipeable<A1, Result<D1, D2>>,
  de: Pipeable<A1, Result<E1, E2>>,
  ef: Pipeable<A1, Result<F1, F2>>,
  fg: Pipeable<A1, Result<G1, G2>>,
  gh: Pipeable<A1, Result<H1, H2>>,
  hi: Pipeable<A1, Result<I1, I2>>,
  ij: Pipeable<A1, Result<J1, J2>>,
  jk: Pipeable<A1, Result<K1, K2>>,
  kl: Pipeable<A1, Result<L1, L2>>,
  lm: Pipeable<A1, Result<M1, M2>>,
  mn: Pipeable<A1, Result<N1, N2>>,
  no: Pipeable<A1, Result<O1, O2>>,
  op: Pipeable<A1, Result<P1, P2>>,
  pq: Pipeable<A1, Result<Q1, Q2>>,
  qr: Pipeable<A1, Result<R1, R2>>,
  rs: Pipeable<A1, Result<S1, S2>>,
  st: Pipeable<A1, Result<T1, T2>>,
  tu: Pipeable<A1, Result<U1, U2>>,
  uv: Pipeable<A1, Result<V1, V2>>,
  vw: Pipeable<A1, Result<W1, W2>>,
  wx: Pipeable<A1, Result<X1, X2>>,
  xy: Pipeable<A1, Result<Y1, Y2>>,
): Pipeable<
  A1,
  Result<
    | B1
    | C1
    | D1
    | E1
    | F1
    | G1
    | H1
    | I1
    | J1
    | K1
    | L1
    | M1
    | N1
    | O1
    | P1
    | Q1
    | R1
    | S1
    | T1
    | U1
    | V1
    | W1
    | X1
    | Y1,
    Error<
      "OR",
      | B1
      | C1
      | D1
      | E1
      | F1
      | G1
      | H1
      | I1
      | J1
      | K1
      | L1
      | M1
      | N1
      | O1
      | P1
      | Q1
      | R1
      | S1
      | T1
      | U1
      | V1
      | W1
      | X1
      | Y1
    >
  >
>;
export function or(...pipeables: Pipeable[]) {
  const length = pipeables.length;

  return (value: unknown) => {
    for (let i = 0; i < length; ++i) {
      const result = pipeables[i](value);

      if (isOk(result)) {
        return result;
      }
    }

    return err(error("OR")(value));
  };
}
