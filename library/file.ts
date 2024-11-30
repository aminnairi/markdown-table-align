import { readFile } from "node:fs/promises";

export async function getFileContent(path: string): Promise<string | undefined> {
  try {
    const fileContent = (await readFile(path)).toString();

    return fileContent;
  } catch {
    return undefined;    
  }
}

