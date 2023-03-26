import { wrap, and, filter, map } from "../src/sync";
import { error } from "../src/utils";

type User = {
  email: string;
  age: number;
};

const USER_KEYS: Array<keyof User> = ["email", "age"];

const userSchema = wrap(
  filter((user: User) => {
    for (const key in user) {
      if (!USER_KEYS.includes(key as keyof User)) {
        return false;
      }
    }

    return true;
  }),
  error("USER_SCHEMA_ERROR"),
);

const userAgeIsAdult = wrap(
  filter(({ age }: User) => age > 18),
  error("AGE_IS_NOT_ADULT"),
);

const userAgeIsReal = wrap(
  filter(({ age }: User) => age < 150),
  error("AGE_IS_NOT_REAL"),
);

// PipeableSync<User, Result<string, Error<"USER_SCHEMA_ERROR"> | Error<"AGE_IS_NOT_ADULT"> | Error<"AGE_IS_NOT_REAL">>>
export const getUserDomain = and(
  userSchema,
  userAgeIsAdult,
  userAgeIsReal,
  map(({ email }: User) => email),
  map((email: string) => email.split("@")[1]),
);

// This will return "icloud.com" because
// 1. The user has a valid schema
// 2. The user is an adult
// 3. The user is real
// 4. The user's email is returned
// 5. The user's domain is returned
getUserDomain({
  email: "yamiteru@icloud.com",
  age: 19,
});
