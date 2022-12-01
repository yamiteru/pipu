import { filter, map } from "../utils";

export const has = <K extends string>(key: K) =>
  filter<Record<string | K, unknown>>((v) => key in v);

// Returns object entries
export const entries = <
	T extends Record<string, unknown>
>(obj: T) => map((v: T) => Object.entries(v))(obj);

// Returns object values
export const values = <
	T extends Record<string, unknown>
>(obj: T) => map((v: T) => Object.values(v))(obj);

// Returns object keys
export const keys = <
	T extends Record<string, unknown>
>(obj: T) => map((v: T) => Object.keys(v))(obj);

// Returns the input object with only the specified keys
export const pick = <
	T extends string[]
>(keys: T) => map((v: Record<string, unknown>) => {
	const res: Record<string, unknown> = {};	

	for(let i = 0; i < keys.length; ++i) {
		const k = keys[i];
		res[k] = v[k];
	}

	return res;
});

// Returns the input objects without the specified keys
export const omit = <
	T extends string[]
>(keys: T) => map((v: Record<string, unknown>) => {
	const res: Record<string, unknown> = {};

	for(const k in v) {
		if(!keys.includes(k)) {
			res[k] = v[k];
		}
	}

	return res;
});
