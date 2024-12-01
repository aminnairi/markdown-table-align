import { getFileContent } from "./library/file.ts";
import { getStandardInput } from "./library/process.ts";
import { transpose, getLines, getColumns } from "./library/string.ts";
function padArray<Item>(items: Item[], length: number, item: Item): Item[] {
  const itemsLength = items.length

  if (itemsLength >= length) {
    return items
  }

  return [
    ...items,
    ...Array.from(Array(length - itemsLength)).map(() => item)
  ]
}

export function alignMarkdownTable(separator: string, content: string): string {
  const lines = getLines(content).map(line => {
    return getColumns(separator, line);
  }).filter(line => {
    return !isSeparationLine(line);
  });

  if (lines.length === 0 ) {
    return "";
  }

  const largestLineLength = Math.max(...lines.map(line => {
    return line.length;
  }));

  const paddedLines = lines.map(line => {
    return padArray(line, largestLineLength, "");
  });

  const transposedLinesWithColumns = transpose(paddedLines);

  const largestColumns = transposedLinesWithColumns.map(columns => {
    return Math.max(...columns.map(column => {
      return column.length;
    }));
  });


  const separationLine = largestColumns.map(largestColumn => {
    return "-".repeat(largestColumn - 1) + "-";
  });

  const paddedLinesWithColumns = lines.map(columns => {
    return padArray(columns, largestLineLength, "").map((column, columnIndex) => {
      const padding = largestColumns[columnIndex] ?? 0;
      return column.padEnd(padding, " ");
    })
  });

  const joinedLines = paddedLinesWithColumns.map(columns => {
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
