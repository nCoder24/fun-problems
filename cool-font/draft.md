# COOLFONT

## What is cool-font?
-> It's a font printer.

## What is it's input?
-> it takes a `font` file and a `text` to apply the font. `text` is a sequence of alphabets described in the font-file.

## What is a font?
-> a font is a particular size, weight and style of a typeface. It's a collectoin of glyphs.

## How fonts are represented internally?
```js
font = {
  A: [
    " #  ",
    "# # ",
    "### ",
    "# # ",
    "# # ",
  ]
}
```

## How a glyph is represented?
-> Here, a glyph is a block of ascii characters describing a shape, design, or representation of an alphabet.

## What is a font file?
-> it's a plain text file described as -
  - *Line1:* width of a glyph (number)
  - *Line2:* height of a glyph (number)
  - *Rest of the lines:* glyphs of all alphabet (A-Z) placed sequentially adjacent to each other

## SYNOPSIS:
 - `node cool-font.js <font-file> <text>`
 *Example:* node cool-font.js resources/font THISISCOOL