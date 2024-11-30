# markdown-table-align

Align your markdown table

## Requirements

- [Deno](https://deno.com/)
- [Git](https://git-scm.com/)

## Clone

```bash
git clone https://github.com/aminnairi/markdown-table-align
cd markdown-table-align
```

## Installation

```bash
deno compile --allow-read --output ~/.local/bin index.ts
```

Where `~/.local/bin` is the folder containing your binaries.

## Usage

### With argument

```bash
markdown-table-align example.md
```

### With pipe

```bash
cat example.md | markdown-table-align
```
