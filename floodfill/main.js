const { paintGrid, colorPoints, printPointsInInterval, makeCoursorInvisible } = require("./annimation");
const { calculateInsidePoints } = require("./floodfill");

const main = () => {
  const [insidePoint, ...barriers] = require("./resources/input2.json");
  const pointsInside = calculateInsidePoints(insidePoint, barriers);

  const [maxRow, maxCol] = barriers.reduce(([maxRow, maxCol], [row, col]) => {
    return [Math.max(maxRow, row), Math.max(maxCol, col)];
  });

  makeCoursorInvisible();

  paintGrid(maxRow + 1, maxCol + 1);
  colorPoints(barriers);
  printPointsInInterval(pointsInside, 500);

  process.stdin.read();
};

main();