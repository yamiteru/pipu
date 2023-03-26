import { ALPHABET, LETTERS, saveGenerated } from "../shared";

export default async () => {
  let type = "";

  for (let i = 1; i < LETTERS; ++i) {
    const generics: string[] = [];
    const input: string[] = [];
    const resultOk: string[] = [];
    const pipeableInput: string[] = [];

    for (let j = 0; j < i; ++j) {
      const current = ALPHABET[j];

      generics.push(
        `$Input_${current}, $Output_${current}, $Error_${current} extends Error`,
      );

      input.push(
        `pipeable_${current.toLocaleLowerCase()}: PipeableSync<$Input_${current}, Result<$Output_${current}, $Error_${current}>>`,
      );

      resultOk.push(`$Output_${current}`);
      pipeableInput.push(`$Input_${current}`);
    }

    type += `export function or<${generics.join(",")}>(${input.join(
      ",",
    )}): PipeableSync<Either<[${pipeableInput.join(
      ",",
    )}]>, Result<Either<[${resultOk.join(
      ",",
    )}]>, Error<"OR", Either<[${pipeableInput.join(",")}]>>>>;`;
  }

  await saveGenerated("sync_or", type);
};
