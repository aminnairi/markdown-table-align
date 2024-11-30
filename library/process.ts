export async function getStandardInput(): Promise<string> {
  let standardInput = "";

  const decoder = new TextDecoder();

  for await (const line of Deno.stdin.readable) {
    standardInput += decoder.decode(line);
  }

  return standardInput;
}

