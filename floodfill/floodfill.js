const floodfill = (pointsInside, start, boundary) => {
  if (start in pointsInside || start in boundary) return;
  pointsInside[start] = start;

  const [row, col] = start;
  floodfill(pointsInside, [row, col + 1], boundary);
  floodfill(pointsInside, [row, col - 1], boundary);
  floodfill(pointsInside, [row + 1, col], boundary);
  floodfill(pointsInside, [row - 1, col], boundary);
};

const calculateInsidePoints = (insidePoint, barriers) => {
  const pointsInside = {};
  boundary = Object.fromEntries(barriers.map((point) => [point]));

  floodfill(pointsInside, insidePoint, boundary);
  return Object.values(pointsInside);
}

exports.calculateInsidePoints = calculateInsidePoints;