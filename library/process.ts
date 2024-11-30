export async function getStandardInput(): Promise<string> {
  let standardInput = "";

  for await (const line of process.stdin) {
    standardInput += line;
  }

  return standardInput;
}

