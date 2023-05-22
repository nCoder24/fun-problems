const esc = "\033";
const style = (text, code) => `${esc}[${code}m${text}${esc}[0m`;
const printAt = (text, line, column) => console.log(
  `${esc}[${line + 1};${column * 2 + 1}f${text}`
);

const paintGrid = (row, col) => {
  const yellowBox = style("  ", 43);
  console.clear();
  console.log(`${yellowBox.repeat(col)}\n`.repeat(row));
};

const colorPoints = (points) => {
  const blackBox = style("  ", 40);
  points.forEach(([row, col]) => {
    printAt(blackBox, row, col);
  });
};

exports.paintGrid = paintGrid;
exports.colorPoints = colorPoints;
exports.style = style;
exports.printAt = printAt;