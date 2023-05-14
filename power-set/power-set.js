const powerSet = (set) => {
  if (set.length === 0) return [[]];

  const powerSetOfRest = powerSet(set.slice(1));

  return [
    ...powerSetOfRest,
    ...powerSetOfRest.map((subSet) => [set[0], ...subSet]),
  ];
};

const main = () => {
  const randomSet = new Array(24).fill().map((_, i) => i + 1);
  console.log(powerSet(randomSet));
};

main();