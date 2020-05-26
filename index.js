const map = require("./lib/map");
const reduceNumbers = require("./lib/reduceNumbers");

const arr = [1, 5, 2, 3, 15, 22, 31];
console.log(map(arr, (item) => item + 1));

console.log(reduceNumbers(arr,reducer));


function reducer(acc , currentValue){
  return acc + currentValue;
}