const esc = "\033";
const style = (text, code) => `${esc}[${code}m${text}${esc}[0m`;
const printAt = (text, line, column) => process.stdout.write(
  `${esc}[${line + 1};${column * 2 + 1}f${text}`
  );

const makeCoursorInvisible = () => {
  process.stdout.write(esc + "[?25l");
}

const makeCoursorVisible = () => {
  process.stdout.write(esc + "[?25h");
}

const blackBox = style("  ", 40);
const blueBox = style("  ", 44);
const yellowBox = style("  ", 43);
  
const paintGrid = (row, col) => {
  console.clear();
  console.log(`${yellowBox.repeat(col)}\n`.repeat(row));
};

const colorPoints = (points) => {
  points.forEach(([row, col]) => {
    printAt(blackBox, row, col);
  });
};

const printPointsInInterval = (points, interval) => {
  if(points.length === 0) return;

  setTimeout(() => {
    const [row, col] = points[0];
    printAt(blueBox, row, col);
    printPointsInInterval(points.slice(1), interval);
  }, interval);
}

exports.paintGrid = paintGrid;
exports.colorPoints = colorPoints;
exports.printPointsInInterval = printPointsInInterval;
exports.makeCoursorInvisible = makeCoursorInvisible;
exports.makeCoursorVisible = makeCoursorVisible;