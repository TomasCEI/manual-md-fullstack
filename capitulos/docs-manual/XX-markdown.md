# Que es un documento markdown?
---
Un documento markdown es un archivo de texto plano con una extensión `.md` o `.markdown` que utiliza una sintaxis especial para convertir el texto en HTML.
Posee estilos similares a los de un documento HTML, pero con una sintaxis más simple y fácil de escribir.

## Markdown Cheatsheet


### Headings
```markdown
# Heading 1 (same as h1)
## Heading 2 (same as h2)
### Heading 3 (same as h3)
#### Heading 4 (same as h4)
##### Heading 5 (same as h5)
###### Heading 6 (same as h6)
```

# Heading 1 (same as h1)
## Heading 2 (same as h2)
### Heading 3 (same as h3)
#### Heading 4 (same as h4)
##### Heading 5 (same as h5)
###### Heading 6 (same as h6)

## Emphasis

```markdown
*Italic text* or _Italic text_
**Bold text** or __Bold text__
Combined emphasis with **asterisks and _underscores_**
```
*Italic text* or _Italic text_
**Bold text** or __Bold text__
Combined emphasis with **asterisks and _underscores_**

## Lists

```markdown
1. Ordered List Item 1
2. Ordered List Item 2
   - Unordered Sublist Item
   - Unordered Sublist Item
3. Ordered List Item 3

- Unordered List Item
- Unordered List Item
```

1. Ordered List Item 1
2. Ordered List Item 2
   - Unordered Sublist Item
   - Unordered Sublist Item
3. Ordered List Item 3

- Unordered List Item
- Unordered List Item

## Links

```markdown
[Link Text](http://www.example.com)
[Link with Title](http://www.example.com "Link Title")
```

[Link Text](http://www.example.com)
[Link with Title](http://www.example.com "Link Title")

## Images

```markdown
![Alt Text](uploads/markdown_logo.png)
![Alt Text with Title](uploads/markdown_logo.png "Image Title")
```

![Alt Text](uploads/markdown_logo.png)
![Alt Text with Title](uploads/markdown_logo.png "Image Title")

## Blockquotes

```markdown
> This is a blockquote.
> It can span multiple lines.
```

texto común  
> This is a blockquote.
> It can span multiple lines.
> It can span multiple lines.
otro texto comun

## Code


Los bloques de codigo tienen  3 `back-ticks` (\`\`\`) alrededor y el nombre del lenguaje (opcional) en el que deseo ver la sintaxis.
```markdown
    ```javascript
        // Inicio Bloque de código
        const nombre = "Michael Jackson";
        let btn= document.getElementById("btn");
        // Fin Bloque código. 
    ```
```

```javascript
// Inicio Bloque de código
const nombre = "Michael Jackson";
let btn= document.getElementById("btn");
// Fin Bloque código. 
```

# Horizontal Rules

```markdown
---
Horizontal Rule 1
___
Horizontal Rule 2
***
Horizontal Rule 3
```

---
Horizontal Rule 1
___
Horizontal Rule 2
***
Horizontal Rule 3

# Tables

```markdown
| Header 1 | Header 2 |
| ---------| ---------|
| Row 1, Col 1 | Row 1, Col 2 |
| Row 2, Col 1 | Row 2, Col 2 |
```

| Header 1 | Header 2 |
| ---------| ---------|
| Row 1, Col 1 | Row 1, Col 2 |
| Row 2, Col 1 | Row 2, Col 2 |

# Task Lists

- [X] Task 1 (completed)
- [ ] Task 2 (incomplete)
- [ ] Task 3 (incomplete)

# Escaping Characters

```markdown
To display a literal asterisk \* or underscore \_ use a backslash:

\* Not italic \*

\_ Not italic \_
```

To display a literal asterisk \* or underscore \_ use a backslash:

\* Not italic \*

\_ Not italic \_

# Line Breaks

```markdown
To create a line break, end a line with two or more spaces.

This is the first line  
and this is the second line.

same text without
linebreak
```

To create a line break, end a line with two or more spaces.

This is the first line  
and this is the second line.

same text without
linebreak