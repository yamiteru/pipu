import { pipe } from "./pipe";
import { filter, map } from "./utils";

const testPipe = pipe(
	map((v: number) => `[${v}]`)
);

const testPipe2 = pipe(
	filter((v: number) => v < 10, 0),
	testPipe
);

console.log(testPipe2(5));
