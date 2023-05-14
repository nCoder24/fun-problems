const range = function (start, end, diff = 1) {
  const numberOfElements = Math.floor((end - start + 1) / diff);

  return new Array(numberOfElements).fill().map(function (_, i) {
    return i * diff + start;
  });
};

const chunk = (list, chunkSize) => {
  const marks = range(0, list.length, chunkSize)
    .fill()
    .map((_, i) => (i + 1) * chunkSize);

  return marks.map((mark) => list.slice(mark - chunkSize, mark));
};

const join = (delimiter, ...list) => list.join(delimiter);

const map = (mapper, ...collections) =>
  collections[0].map((_, index) =>
    mapper(...collections.map((collection) => collection[index]))
  );

exports.chunk = chunk;
exports.range = range;
exports.chunk = chunk;
exports.map = map;
exports.join = join;
