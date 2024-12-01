export function isSeparationLine(line: string[]): boolean {
  return line.every(column => {
    return column.trim().split("").every(character => {
      return character === "-";
    });
  });
}

export function padArray<Item>(items: Item[], length: number, item: Item): Item[] {
  const itemsLength = items.length

  if (itemsLength >= length) {
    return items
  }

  return [
    ...items,
    ...Array.from(Array(length - itemsLength)).map(() => item)
  ]
}
