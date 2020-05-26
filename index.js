const map = require("./lib/map");
const reduceNumbers = require("./lib/reduceNumbers");
const filter = require("./lib/filter");

const arr = [1, 5, 2, 3, 15, 22, 31];
console.log(map(arr, (item) => item + 1));
console.log(reduceNumbers(arr, reducer));
console.log(filter(arr, filtred));

function reducer(acc, currentValue) {
  return acc + currentValue;
}

function filtred(elem) {
  return elem < 3;
}
