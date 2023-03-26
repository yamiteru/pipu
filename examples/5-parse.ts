import {map, parse} from "../src/sync";

export const double = map((v: number) => v * 2);

parse(double, "not number");
