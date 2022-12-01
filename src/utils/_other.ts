export const ifElse =
  <T, O1, O2>(
    p: (data: T) => boolean,
    o1: (data: T) => O1,
    o2: (data: T) => O2,
  ) =>
  (data: T) =>
    p(data) ? o1(data) : o2(data);

export const call =
  <T>(method: string, ...props: unknown[]) =>
  (value: T) =>
    value[method](...props);

// Returns input value if all predicates return true
export const and = <T>(
	...ps: ((data: T) => boolean)[]
) => filter<T>((v) => {
	for(let i = 0; i < ps.length; ++i) {
		if(!ps[i](v)) return false;
	}

	return true;
});

// Returns input value if at least one predicate returns true
export const or = <T>(
	...ps: ((data: T) => boolean)[]
) => filter<T>((v) => {
	for(let i = 0; i < ps.length; ++i) {
		if(!ps[i](v)) return false;
	}

	return true;
});
