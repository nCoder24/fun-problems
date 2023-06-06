const { colorPoints } = require("./annimation");

const floodfill = (pointsInside, currentPoint, boundary) => {
  if (currentPoint in pointsInside || currentPoint in boundary) return;
  pointsInside[currentPoint] = currentPoint;

  const [row, col] = currentPoint;
  floodfill(pointsInside, [row, col + 1], boundary);
  floodfill(pointsInside, [row, col - 1], boundary);
  floodfill(pointsInside, [row + 1, col], boundary);
  floodfill(pointsInside, [row - 1, col], boundary);
};

const floodFillCenteralizedOrder = (pointsInside, remaining, boundary) => {
  if (remaining.length === 0) return;

  const currentPoint = remaining.shift();
  if (!(currentPoint in pointsInside || currentPoint in boundary)) {
    pointsInside[currentPoint] = currentPoint;

    const [row, col] = currentPoint;
    remaining.push([row + 1, col]);
    remaining.push([row, col + 1]);
    remaining.push([row, col - 1]);
    remaining.push([row - 1, col]);
  }

  floodFillCenteralizedOrder(pointsInside, remaining, boundary);
};

const getInsidePoints = (initialPoint, barriers) => {
  const pointsInside = {};
  const boundary = Object.fromEntries(barriers.map((point) => [point]));

  // floodfill(pointsInside, initialPoint, boundary);
  floodFillCenteralizedOrder(pointsInside, [initialPoint], boundary);
  return Object.values(pointsInside);
};

exports.getInsidePoints = getInsidePoints;
