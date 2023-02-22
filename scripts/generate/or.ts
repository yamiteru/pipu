import { ALPHABET, LETTERS, saveGenerated } from "./shared";

(async () => {
  let type = "";

  for (let i = 2; i < LETTERS; ++i) {
    const generics: string[] = [];
    const input: string[] = [];
    const resultOk: string[] = [];

    for (let j = 1; j < i; ++j) {
      const previous = ALPHABET[j - 1];
      const current = ALPHABET[j];

      generics.push(`${current}1, ${current}2 extends Error`);

      input.push(
        `${previous.toLocaleLowerCase()}${current.toLocaleLowerCase()}: Pipeable<A1, Result<${current}1, ${current}2>>`,
      );

      resultOk.push(`${current}1`);
    }

    const resultOkString = resultOk.join("|");

    type += `export function or<A1, ${generics.join(",")}>(${input.join(
      ",",
    )}): Pipeable<A1, Result<${resultOkString}, Error<"OR", ${resultOkString}>>>;`;
  }

  await saveGenerated("or", type);
})();
