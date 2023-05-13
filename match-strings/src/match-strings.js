const matchStrings = (set1, set2, matchLength = 4) => {
  const referenceTable = set2.reduce(({...table}, set2Input) => {
    table[set2Input.substr(0, matchLength)] = set2Input.substr(matchLength);
    return table;
  }, {});

  return set1.map((set1Input) => {
    return set1Input + referenceTable[set1Input.substr(-matchLength)];
  }); 
}

const main = () => {
  const [firstSet, secondSet] = [["79oklw"], ["oklw737"]];
  console.log(matchStrings(firstSet, secondSet));
}

exports.matchStrings = matchStrings;