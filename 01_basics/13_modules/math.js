const sum = (x, y) => x + y;
const multiply = (x, y) => x * y;

const filter = (list, predicate) => {
  const filtered = [];
  for (const number of list) {
    if (predicate(number)) {
      filtered.push(number);
    }
  }
  return filtered;
};

module.exports = {
  sum,
  multiply,
  filter,
};
