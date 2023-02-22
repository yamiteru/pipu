import { ALPHABET, LETTERS, saveGenerated } from "./shared";

(async () => {
  let type = "";

  for (let i = 2; i < LETTERS; ++i) {
    const generics: string[] = [];
    const input: string[] = [];
    const resultErr: string[] = [];
    let output = "";

    for (let j = 1; j < i; ++j) {
      const previous = ALPHABET[j - 1];
      const current = ALPHABET[j];

      generics.push(`$Output_${current}, $Error_${current} extends Error`);

      input.push(
        `pipeable_${previous.toLocaleLowerCase()}_${current.toLocaleLowerCase()}: Pipeable<${
          j === 1 ? "$Input" : `$Output_${previous}`
        }, Result<$Output_${current}, $Error_${current}>>`,
      );

      resultErr.push(`$Error_${current}`);
      output = `$Output_${current}`;
    }

    type += `export function pipe<$Input, ${generics.join(",")}>(${input.join(
      ",",
    )}): Pipeable<$Input, Result<${output}, Either<[${resultErr.join(
      ",",
    )}]>>>;`;
  }

  await saveGenerated("pipe", type);
})();
