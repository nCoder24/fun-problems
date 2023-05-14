const fs = require("fs");
const { chunk, join, range, map } = require("./lib/array-utils");

const render = (coolText) => map(join.bind(null, ""), ...coolText).join("\n");

const applyFont = (font, text) =>
  render(text.split("").map((alphabet) => font[alphabet]));

const parse = (fontDescription) => {
  const alphabets = String.fromCharCode(...range("A".charCodeAt(0), "Z".charCodeAt(0)));
  const identity = (...elements) => elements;
  const [width, height, ...fontData] = fontDescription.split("\n");
  const glyphs = map(identity, ...fontData.slice(0, height).map(row => chunk(row, width)));

  return Object.fromEntries(glyphs.map((glyph, i) => [alphabets[i], glyph]));
}

const main = () => {
  const font = parse(fs.readFileSync("resources/font", "utf-8"));

  console.log(applyFont(font, "TEXT"));
}

main();