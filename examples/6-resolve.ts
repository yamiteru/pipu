import {and, resolve} from "../src/async";

export const getUser = and(
  resolve((email: string) => new Promise((resolve) => {
    resolve({
      email,
      name: "John Doe",
      age: 18,
    });
  })),
);
