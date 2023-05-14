const result = [[]];

const powerSet = (set) => {
  if (set.length === 0) return;

  powerSet(set.slice(1));
  result.push(...result.map((subSet) => [set[0], ...subSet]));
};

const main = () => {
  const randomSet = new Array(15).fill().map((_, i) => i + 1);
  powerSet(randomSet);

  console.log(result.length);
}

main();