Pipe with a bunch of useful utils ready to be used. Async and highly composable. Execution of functions inside the pipe can be completely skipped.

```bash
npm install pipem # or yarn add pipem
```

## The problem with other libs

Most of the other libs that implement a pipe function are not async and cannot skip functions. Let's see what that's important.

### Async

#### Other libs

As you can see we first have to fetch the user outside the pipe, await the result, pass the result into the pipe and then save save the piped value.

Some libraries allow you to return a `Promise` which you can then await but that makes the API unpredictable since some pipes are sync and some are async.

```ts
const userPipe = pipe(
  pick("name", "email"),
  ...
);

const user = await fetchUser("yamiteru");
const transformedUser = userPipe(user);
```

#### Pipem

Since our pipes are always async we can fetch and await the data inside of them and then pass the result into other functions inside the pipe.

```ts
const userPipe(
  fetchUser,
  pick("name", "email"),
  ...
);

const user = await userPipe("yamiteru");
```

### Skipping

Let's imagine we have a pipe which checks whether the user is between 18 and 36 years and the median of their scores is more then 10.

#### Other libs

Here we have to specify what exactly happens when a condition is false. This creates an indantation hell and we have to use a pipe inside a pipe.

```ts
// returns either user object or null
const agePipe = pipe(
  pick("name", "scores", "age"),
  ifElse(
    ({age}) => and(gte(18), lte(36))(age),
    (v) => pipe(
      median("scores", "scoreMedian"),
      ifElse(
        ({scoreMedian}) => gte(10)(scoreMedian),
        (v) => v,
        () => null
      )
    ),
    () => null
  )
);

const user = agePipe(userObject);

if(user) {
  ..
}
```

#### Pipem

In Pipem any function can return undefined which skips all the functions after the function that returned undefined which makes the whole pipe return undefined.

You can see that the if statement remained the same.

```ts
// returns either user object or undefined
const agePipe(
  pick("name", "scores", "age"),
  and(gte(18), lte(36)),
  median("scores", "scoreMedian"),
  ({scoreMedian}) => gte(10)(scoreMedian)
);

const user = agePipe(userObject);

if(user) {
  ..
}
```

## Let's pipem data for real!

```tsx
const debouncedPhoneInput = (set) => pipe<string>(
  debounce(250),
  pick("target.value"),
  parse(phoneSchema),
  mask(phoneMask),
  set
);

const userById = pipe<string>(
  api.user,
  mergeFirstAndLastName,
  ifElse(
    isAdmin,
    prop("permissions", PERMISSIONS.ADMIN),
    prop("permissions", PERMISSIONS.PUBLIC)
  ),
  prop(
    "data",
    ({id, permissions}) => api.userData(id, permissions)
  ),
  pick("id", "name", "data")
);

const userByPhone = pipe<Maybe<string>>(
  isTruthy,
  api.userByPhone,
  isTruthy,
  transform(({id}) => id),
  userById
);

// in a react component
const [phone, setPhone] = useState<Maybe<string>>();

useEffect(async () => {
  const user = await userByPhone(phone);
  if(user) ctx.setUser(user);
}, [phone]);

return <input onChange={debouncedPhoneInput(setPhone)} />
```
