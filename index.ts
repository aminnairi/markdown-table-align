import { getFileContent } from "./library/file.ts";
import { getStandardInput } from "./library/process.ts";
import { transpose, getLines, getColumns } from "./library/string.ts";

export function alignMarkdownTable(separator: string, content: string): string {
  const lines = getLines(content).map(line => {
    return getColumns(separator, line);
  });

  if (lines.length === 0 ) {
    return "";
  }

  const transposedLinesWithColumns = transpose(lines);

  const largestColumns = transposedLinesWithColumns.map(columns => {
    return Math.max(...columns.map(column => {
      return column.length;
    }));
  });

  const separationLine = largestColumns.map(largestColumn => {
    return "-".repeat(largestColumn - 1) + "-";
  });

  const paddedLines = lines.map(columns => {
    return columns.map((column, columnIndex) => {
      const padding = largestColumns[columnIndex];
      return column.padEnd(padding, " ");
    });
  });

  const joinedLines = paddedLines.map(columns => {
    return columns.join(` ${separator} `);
  });

  const output = [joinedLines[0], separationLine.join(` ${separator} `), ...joinedLines.slice(1)].join("\n");

  return output;
}

if (import.meta.main) {
  const fileContent = await getFileContent(Deno.args[0]) ?? await getStandardInput();
  const columnSeparator = "|";

  console.log(alignMarkdownTable(columnSeparator, fileContent));
}
