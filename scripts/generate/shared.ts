import { writeFile, mkdir } from "fs/promises";

export const LETTERS = 34;

export const ALPHABET = [...new Array(LETTERS)].map((_, i) => `${i}`);

export const saveGenerated = async (name: string, data: string) => {
  try {
    await mkdir("generated");
  } catch {
    // I don't care
  }

  await writeFile(`generated/${name}.ts`, data);
};
