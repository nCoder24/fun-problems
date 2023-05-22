const { calculateInsidePoints } = require("./floodfill");

const main = () => {
  const [insidePoint, ...barriers] = require("./resources/input2.json");
  console.log(calculateInsidePoints(insidePoint, barriers));
};

main();