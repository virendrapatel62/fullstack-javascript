const findGT5 = function (list) {
  const filtered = [];
  for (item of list) {
    if (item > 5) {
      filtered.push(item);
    }
  }
  return filtered;
};

const findEvenNumber = function (list) {
  const filtered = [];
  for (item of list) {
    if (item % 2 == 0) {
      filtered.push(item);
    }
  }
  return filtered;
};

const findOddNumber = function (list) {
  const filtered = [];
  for (item of list) {
    if (item % 2 == 1) {
      filtered.push(item);
    }
  }
  return filtered;
};

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(findGT5(numbers));
console.log(findEvenNumber(numbers));
console.log(findOddNumber(numbers));

const filterList = (list, predicate) => {
  const filtered = [];
  for (const number of list) {
    if (predicate(number)) {
      filtered.push(number);
    }
  }
  return filtered;
};

console.log(filterList(numbers, (number) => number > 5));
console.log(filterList(numbers, (number) => number < 2));
console.log(filterList(numbers, (number) => number % 2));
console.log(filterList(numbers, (number) => !(number % 2)));
console.log(filterList(numbers, (number) => number));
console.log(filterList(numbers, (number) => !number));
console.log(filterList(numbers, (number) => number % 3 == 0));
