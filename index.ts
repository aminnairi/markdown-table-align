import { getFileContent } from "./library/file.ts";
import { getStandardInput } from "./library/process.ts";
import { transpose, getLines, getColumns } from "./library/string.ts";

const fileContent = await getFileContent(Deno.args[0]) ?? await getStandardInput();

const columnSeparator = "|";

const lines = getLines(fileContent).map(line => {
  return getColumns(columnSeparator, line);
});

if (lines.length === 0 ) {
  Deno.exit(0);
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
  return columns.join(` ${columnSeparator} `);
});

const output = [joinedLines[0], separationLine.join(` ${columnSeparator} `), ...joinedLines.slice(1)].join("\n");

console.log(output);
