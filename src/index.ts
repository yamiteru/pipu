import {andAsync, orAsync, parseAsync, resolveAsync, wrapAsync} from "./async";
import {andSync, filterSync, mapSync, orSync, parseSync, wrapeSync} from "./sync";

export * from "./types";
export * from "./utils";

export const async = {
  and: andAsync,
  or: orAsync,
  parse: parseAsync,
  resolve: resolveAsync,
  wrap: wrapAsync
};

export const sync = {
  and: andSync,
  or: orSync,
  parse: parseSync,
  wrap: wrapeSync,
  filter: filterSync,
  map: mapSync
};
