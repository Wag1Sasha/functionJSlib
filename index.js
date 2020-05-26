const map = require("./lib/map");
const reduceNumbers = require("./lib/reduceNumbers");
const filter = require("./lib/filter");
const find = require("./lib/find");
const indexOf = require("./lib/indexOf");
const inclodes = require("./lib/includes");
const forEach = require("./lib/forEach");

let arr = [1, 5, 2, 3, 15, 22, 31];
let copyArr = [];
console.log(map(arr, (item) => item + 1));
console.log(reduceNumbers(arr, reducer));
console.log(filter(arr, filtred));
console.log(find(arr, findNumber));
console.log(indexOf(arr, 15));
console.log(inclodes(arr, 22));
console.log(forEach(arr, makeCopy));

function makeCopy(item) {
  return copyArr.push(item);
}
function findNumber(elem) {
  return elem < 3;
}

function reducer(acc, currentValue) {
  return acc + currentValue;
}

function filtred(elem) {
  return elem < 3;
}
