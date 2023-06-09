const esc = "\033";

const style = (text, code) => `${esc}[${code}m${text}${esc}[0m`;
const printAt = (text, line, column) =>
  process.stdout.write(`${esc}[${line + 1};${column * 2 + 1}f${text}`);

const blackBox = style("  ", 40);
const blueBox = style("  ", 44);
const yellowBox = style("  ", 43);

const makeCoursorInvisible = () => {
  process.stdout.write(esc + "[?25l");
};

const makeCursorVisible = () => {
  process.stdout.write(esc + "[?25h");
};

const paintGrid = (row, col) => {
  console.clear();
  console.log(`${yellowBox.repeat(col)}\n`.repeat(row));
  console.log();
};

const colorPoints = (points, colorCode) => {
  points.forEach(([row, col]) => {
    printAt(style("  ", colorCode), row, col);
  });
};

const printPointsInInterval = (points, interval, code) => {
  if (points.length === 0) return;

  setTimeout(() => {
    const [row, col] = points[0];
    printAt(style("  ", code), row, col);
    printPointsInInterval(points.slice(1), interval, code);
  }, interval);
};

exports.paintGrid = paintGrid;
exports.colorPoints = colorPoints;
exports.printPointsInInterval = printPointsInInterval;
exports.makeCoursorInvisible = makeCoursorInvisible;
exports.makeCoursorVisible = makeCursorVisible;
