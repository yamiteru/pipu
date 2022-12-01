import { Bool, Fn } from "../../types";
import { condition } from "./condition";

// Passes if all of the predicates return true
export const all = <Value>(
	...ps: (Fn<Value , Bool>)[]
) => condition<Value>((v) => {
	for(let i = 0; i < ps.length; ++i) {
		if(ps[i](v) === false) {
			return false;
		}
	}

	return true;
});
