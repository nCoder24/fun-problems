const floodfill = (pointsInside, start, boundary) => {
  if (start in pointsInside || boundary[[start]]) return;
  pointsInside[start] = start;

  const [x, y] = start;
  floodfill(pointsInside, [x, y + 1], boundary);
  floodfill(pointsInside, [x, y - 1], boundary);
  floodfill(pointsInside, [x + 1, y], boundary);
  floodfill(pointsInside, [x - 1, y], boundary);
};

const calculateInsidePoints = (insidePoint, barriers) => {
  const pointsInside = {};
  boundary = Object.fromEntries(barriers.map((point) => [point, true]));

  floodfill(pointsInside, insidePoint, boundary);
  return Object.values(pointsInside);
}

exports.calculateInsidePoints = calculateInsidePoints;