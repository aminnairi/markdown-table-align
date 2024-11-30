export function transpose(linesWithColumns: string[][]): string[][] {
  const firstLine = linesWithColumns[0];

  if (firstLine === undefined) {
    return [];
  }

  return firstLine.map((_, columnIndex) => {
    return linesWithColumns.map((line) => {
      return line[columnIndex];
    });
  });
}

export function getLines(text: string): string[] {
  return text.split("\n").map(line => {
    return line.trim();
  }).filter(Boolean);
}

export function getColumns(separator: string, line: string): string[] {
  return line.split(separator).map(column => {
    return column.trim();
  }).filter(Boolean);
}
