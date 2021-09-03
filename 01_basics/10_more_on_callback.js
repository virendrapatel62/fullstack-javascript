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

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -2, -3];

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

console.log(
  "GT 5 ",
  filterList(numbers, (number) => number > 5)
);
console.log(
  "LT 2 ",
  filterList(numbers, (number) => number < 2)
);
console.log(
  "Even : ",
  filterList(numbers, (number) => number % 2)
);
console.log(
  "Odd : ",
  filterList(numbers, (number) => !(number % 2))
);
console.log(
  "GT 0 : ",
  filterList(numbers, (number) => number)
);
console.log(
  "Equal 0 or NAN:  ",
  filterList(numbers, (number) => !number)
);
console.log(
  "Divided By 3 : ",
  filterList(numbers, (number) => number % 3 == 0)
);
