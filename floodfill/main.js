const { paintGrid, colorPoints, printAt, style } = require("./annimation");
const { calculateInsidePoints } = require("./floodfill");

const main = () => {
  const [insidePoint, ...barriers] = require("./resources/input1.json");
  const pointsInside = calculateInsidePoints(insidePoint, barriers);

  const [maxRow, maxCol] = barriers.reduce(([maxRow, maxCol], [row, col]) => {
    return [Math.max(maxRow, row), Math.max(maxCol, col)];
  });

  paintGrid(maxRow + 1, maxCol + 1);
  colorPoints(barriers);

  const blueBox = style("  ", 44);
  pointsInside.forEach(([row, col]) => {
      printAt(blueBox, row, col);
  });

  process.stdin.read();
};

main();