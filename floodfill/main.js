const { paintGrid, colorPoints, printPointsInInterval, makeCoursorInvisible } = require("./annimation");
const { getInsidePoints } = require("./floodfill");

const main = () => {
/*   const barriers = require("./resources/yin-yang.json");
  const pointsInsideLeftShape = getInsidePoints([14, 15], barriers);
  const pointsInsideRightShape = getInsidePoints([14, 3], barriers);
  const pointsInsideUpperCircle = getInsidePoints([6, 16], barriers);
  const pointsInsideLowerCircle = getInsidePoints([32 - 6, 16], barriers); */
  
  const barriers = require("./resources/rectangle.json");
  const pointsInsideShape = getInsidePoints([19, 19], barriers);

  const [maxRow, maxCol] = barriers.reduce(([maxRow, maxCol], [row, col]) => {
    return [Math.max(maxRow, row), Math.max(maxCol, col)];
  });

  makeCoursorInvisible();

  paintGrid(maxRow + 1, maxCol + 1);
  colorPoints(barriers, 40);
/*   printPointsInInterval(pointsInsideLeftShape, 50, 44);
  printPointsInInterval(pointsInsideRightShape, 50, 42);
  printPointsInInterval(pointsInsideUpperCircle, 50, 45);
  printPointsInInterval(pointsInsideLowerCircle, 50, 45); */
  printPointsInInterval(pointsInsideShape, 50, 45);

  process.stdin.read();
};

main();