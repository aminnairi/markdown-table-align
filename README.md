# markdown-table-align

Align your markdown table

## Requirements

- [Deno](https://deno.com/)
- [Git](https://git-scm.com/)
- [Bash](https://www.gnu.org/software/bash/), or [Zsh](https://www.zsh.org/), or [Fish](https://fishshell.com/), or any GNU/Linux shell

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
cat example.md
```

```text
| ID | Name | Category ID |
| 11092 | Gorilla Fist | 27 |
| 11212 | Plate 3 x 3 | 14 |
| 11209 | Tyre 21 x 9.9 | 29 |
| 11640pr0003 | ELECTRIC GUITAR SHAFT Ø3.2 NO. 3 | 27 |
```

```bash
markdown-table-align example.md
```

```
ID          | Name                             | Category ID
----------- | -------------------------------- | -----------
11092       | Gorilla Fist                     | 27         
11212       | Plate 3 x 3                      | 14         
11209       | Tyre 21 x 9.9                    | 29         
11640pr0003 | ELECTRIC GUITAR SHAFT Ø3.2 NO. 3 | 27
```

### With pipe

```bash
cat example.md
```

```text
| ID | Name | Category ID |
| 11092 | Gorilla Fist | 27 |
| 11212 | Plate 3 x 3 | 14 |
| 11209 | Tyre 21 x 9.9 | 29 |
| 11640pr0003 | ELECTRIC GUITAR SHAFT Ø3.2 NO. 3 | 27 |
```


```bash
cat example.md | markdown-table-align
```

```
ID          | Name                             | Category ID
----------- | -------------------------------- | -----------
11092       | Gorilla Fist                     | 27         
11212       | Plate 3 x 3                      | 14         
11209       | Tyre 21 x 9.9                    | 29         
11640pr0003 | ELECTRIC GUITAR SHAFT Ø3.2 NO. 3 | 27
```
