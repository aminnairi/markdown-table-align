import { getFileContent } from "./library/file.ts";
import { getStandardInput } from "./library/process.ts";
import { alignMarkdownTable } from "./library/markdown.ts"

if (import.meta.main) {
  const fileContent = await getFileContent(Deno.args[0]) ?? await getStandardInput();
  const columnSeparator = "|";

  console.log(alignMarkdownTable(columnSeparator, fileContent));
}

export {
  alignMarkdownTable 
}
