import { writeFile, mkdir } from "fs/promises";

const ALPHABET = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const LETTERS = ALPHABET.length;

(async () => {
  let type = "";

  for (let i = 2; i < LETTERS; ++i) {
    const generics: string[] = [];
    const input: string[] = [];
    const resultErr: string[] = [];

    for (let j = 1; j < i; ++j) {
      const previous = ALPHABET[j - 1];
      const current = ALPHABET[j];

      generics.push(`${current}1, ${current}2 extends Error`);

      input.push(
        `${previous.toLocaleLowerCase()}${current.toLocaleLowerCase()}: Pipeable<${previous}1, Result<${current}1, ${current}2>>`,
      );

      resultErr.push(`${current}2`);
    }

    type += `export function pipe<A1, ${generics.join(",")}>(${input.join(
      ",",
    )}): Pipeable<A1, Result<A1, ${resultErr.join("|")}>>;`;
  }

  try {
    await mkdir("generated");
  } catch {
    // I don't care
  }

  await writeFile("generated/pipe.ts", type);
})();
