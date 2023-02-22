import { writeFile, mkdir } from "fs/promises";

export const ALPHABET = [
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

export const LETTERS = ALPHABET.length;

export const saveGenerated = async (name: string, data: string) => {
  try {
    await mkdir("generated");
  } catch {
    // I don't care
  }

  await writeFile(`generated/${name}.ts`, data);
};
