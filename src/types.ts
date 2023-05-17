import { transform } from "./utils";

export type Either<L, R> = L | R;
export type Maybe<T> = Either<undefined, T>;
export type PipeFn<I, O> = (data: I, id: symbol) => Maybe<O>;
export type PipeReturn<I, O> = (data: I) => Promise<Maybe<O>>;
export type Struct = Record<string | number | symbol, unknown>;
export type Fn<Input, Output> = (value: Input) => Output;
export type Bool = boolean;

type Brand<K, T> = K & { __brand: T };

enum Options {
	None,
	Some
}

type Some<T> = Brand<[Options.Some, T], "Some">;
type None<T> = Brand<[Options.None, T], "None">;

type Option<L, R> = None<L> | Some<R>;

type Lazy<T> = () => T;

function some<T>(value: T) {
	return [Options.Some, value] as Some<T>;
}

function none<T>(value?: T) {
	return [Options.None, value] as None<T>;
}

const isEven = (value: number): Option<string, number> => 
	!(value%2) ? some(value): none(`${value} is odd`)

const isSome = <T>(
	option: Option<unknown, T>
): option is Some<T> => option[0] === Options.Some; 

const isNone = <T>(
	option: Option<T, unknown>
): option is None<T> => option[0] === Options.None;

const getNone = <T>(option: Option<T, unknown>): Maybe<T> => 
	isNone(option) ? option[1]: undefined;

const getSome = <T>(option: Option<unknown, T>): Maybe<T> => 
	isSome(option) ? option[1]: undefined;
	
const match = <L, LR, R, RR>(
	option: Option<L, R>,
	onSome: (value: Lazy<Maybe<R>>) => LR,
	onNone: (value: Lazy<Maybe<L>>) => RR
) => some(
	isSome(option)
		? onSome(() => getSome(option))
		: onNone(() => getNone(option))
);

const isThreeEven = match(
	isEven(3),
	(v) => `${v()} is even`,
	(v) => `${v()} is odd`
);

const namePipe = pipe(
	transform(({first_name, last_name}) => 
		`${first_name} ${last_name}`),
	toLowerCase,
	padRight(20)
);

const userPipe = pipe(
	tryCatch(
		fetchUser,
		(v) => some(v),
		() => none()
	),
	ifElse(
		condition(({role}) => role === "admin"),
		prop("permissions", adminPermissions),
		prop("permissions", publicPermissions)
	),
	prop("name", namePipe),
	pick("name", "permissions", "email")
);



