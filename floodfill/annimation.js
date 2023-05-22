const esc = "\033";
const style = (text, code) => `${esc}[${code}m${text}${esc}[0m`;
const printAt = (text, line, column) => console.log(
  `${esc}[${line};${column}f${text}`
);

const paintGrid = (height, width) => {
  const whiteBox = style("  ", 47);
  console.clear();
  console.log(`${whiteBox.repeat(width)}\n`.repeat(height));
};

const colorPoints = (points) => {
  const blackBox = style("  ", 40);
  points.forEach((point) => {
    printAt(blackBox, point[0] + 1, point[1] + 1);
  })
};

exports.paintGrid = paintGrid;
exports.colorPoints = colorPoints;
exports.style = style;
exports.printAt = printAt;