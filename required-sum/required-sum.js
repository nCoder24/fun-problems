const fs = require("fs");

const findPair = (list, startIndex, requiredSum) => {
  for(let index = startIndex; index < list.length; index++) {
    const lastElement = requiredSum - list[index];
    const indexOfLastElement = list.indexOf(lastElement, startIndex);
    if(indexOfLastElement !== -1) {
      return {[index]: list[index], [indexOfLastElement]: lastElement};
    }
  }
}

const findTriplet = (list, requiredSum) => {
  for(let index = 0; index < list.length; index++) {
    const pair = findPair(list, index + 1, requiredSum - list[index]);
    if(pair) return {[index]: list[index], ...pair};
  }
}

const main = function () {
  const content = fs.readFileSync("./random-numbers.txt", "utf8");
  const numbers = content.split("\n").map((e) => +e);
  console.log(findTriplet(numbers, 119137415));
}

main();