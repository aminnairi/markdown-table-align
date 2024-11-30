export async function getFileContent(path: string): Promise<string | undefined> {
    try {
    const decoder = new TextDecoder("UTF-8");
    const encoded = await Deno.readFile(path);
    const content = decoder.decode(encoded);

    return content;
  } catch {
    return undefined;    
  }
}

