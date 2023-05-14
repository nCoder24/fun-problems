const fs = require("fs");
const { chunk, join, range, map } = require("./lib/array-utils");

const render = (coolText) => map(join.bind(null, ""), ...coolText).join("\n");

const applyFont = (font, text) =>
  render(text.split("").map((alphabet) => font[alphabet]));

const parse = (fontDescription) => {
  const alphabets = String.fromCharCode(
    ...range("A".charCodeAt(0), "Z".charCodeAt(0))
  );
  const [width, height, ...fontData] = fontDescription.split("\n");

  const identity = (...elements) => elements;
  const glyphs = map(
    identity,
    ...fontData.slice(0, height).map((row) => chunk(row, width))
  );

  return Object.fromEntries(glyphs.map((glyph, i) => [alphabets[i], glyph]));
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
