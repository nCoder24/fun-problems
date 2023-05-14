const fs = require("fs");
const { chunk, join, map, transpose } = require("./lib/array-utils");

const render = (coolText) => map(join.bind(null, ""), ...coolText).join("\n");

const applyFont = (font, text) =>
  render(text.split("").map((alphabet) => font[alphabet]));

const upperCaseLetter = (index) =>
  String.fromCharCode("A".charCodeAt(0) + index);

const parse = (fontDescription) => {
  const [width, height, ...rawFont] = fontDescription.split("\n");
  const fontData = rawFont.slice(0, height).map((row) => chunk(row, width));
  const glyphs = transpose(fontData);

  return Object.fromEntries(
    glyphs.map((glyph, i) => [upperCaseLetter(i), glyph])
  );
};

const readFile = (file) => {
  try {
    return fs.readFileSync(file, "utf-8");
  } catch {
    console.log("Error reading file");
  }
};

const main = () => {
  const [fontFile, text] = process.argv.slice(2);
  const font = parse(readFile(fontFile));

  console.log(applyFont(font, text));
};

main();
