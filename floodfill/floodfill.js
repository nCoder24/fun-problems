const makeBoundary = (points) => {
  const lookup = Object.fromEntries(points.map(x => [x, true]));
  return (point) => point in lookup;
};

const floodfill = (pointsInside, start, isOnBoundary) => {
  if (start in pointsInside || isOnBoundary(start)) return;
  pointsInside[start] = start;

  floodfill(pointsInside, [start[0], start[1] + 1], isOnBoundary);
  floodfill(pointsInside, [start[0], start[1] - 1], isOnBoundary);
  floodfill(pointsInside, [start[0] + 1, start[1]], isOnBoundary);
  floodfill(pointsInside, [start[0] - 1, start[1]], isOnBoundary);
};

const main = () => {
  const [start, ...isOnBoundary] = require("./resources/input3.json");
  const pointsInside = {};
  
  floodfill(pointsInside, start, makeBoundary(isOnBoundary));

  console.log(Object.values(pointsInside));
};

main();