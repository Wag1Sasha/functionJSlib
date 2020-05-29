const _ = require("lodash");
const map = require("./lib/map");
const reduceNumbers = require("./lib/reduceNumbers");
const filter = require("./lib/filter");
const find = require("./lib/find");
const indexOf = require("./lib/indexOf");
const inclodes = require("./lib/includes");
const forEach = require("./lib/forEach");
const concat = require("./lib/concat");
const fill = require("./lib/fill");
const findIndex = require("./lib/findIndex");
const compact = require("./lib/compact");
const chunk = require("./lib/chunk");
const slice = require("./lib/slice");
const List = require("./listLib/List.js");

let list = new List();
list.addToStart("Vasya");
list.addToStart("jora");
list.addToStart("greka");
list.addToStart("reka");
list.addToStart("beka");
list.addToPlace("eblan", 2);
list.addToEnd("lesli");
list.deleteLastElement();
list.deleteElement("reka");
list.showList();

// let arr = [1, 2, 3, 4, 5, 6, 7, 6, 3, 2];   ++++++++++++++++++++++++++++++++
// let arr2 = [55, 66, 77];   ++++++++++++++++++++++++++++++++
// let copyArr = [];   ++++++++++++++++++++++++++++++++
// let arr3 = [1, "", "true", true, NaN, false, 2, undefined];   ++++++++++++++++++++++++++++++++
// console.log(map(arr, (item) => item + 1));   ++++++++++++++++++++++++++++++++
// console.log(reduceNumbers(arr, reducer));   ++++++++++++++++++++++++++++++++
// console.log(filter(arr, filtred));   ++++++++++++++++++++++++++++++++
// console.log(find(arr, findNumber));   ++++++++++++++++++++++++++++++++
// console.log(indexOf(arr, 15));   ++++++++++++++++++++++++++++++++
// console.log(inclodes(arr, 22));   ++++++++++++++++++++++++++++++++
// console.log(forEach(arr, makeCopy));   ++++++++++++++++++++++++++++++++
// console.log(concat(arr, arr2));   ++++++++++++++++++++++++++++++++
// console.log(fill(arr, 2));   ++++++++++++++++++++++++++++++++
// console.log(findIndex(arr, 5));   ++++++++++++++++++++++++++++++++
// console.log(_.compact(arr3));   ++++++++++++++++++++++++++++++++
// console.log(compact(arr3));   ++++++++++++++++++++++++++++++++
// console.log(_.chunk(arr, 3));   ++++++++++++++++++++++++++++++++
// console.log(chunk(arr, 3));   ++++++++++++++++++++++++++++++++
// console.log(slice(arr, 3, 5));   ++++++++++++++++++++++++++++++++
// array.toString() ----------------------------
// list Class {AddToStart(element, ...rest),
//             AddToEnd(element,...rest),
//             addToPlace(element,place, ...rest),
//             deleteElement(element,...rest),
//             deleteFirstElement(),
//             deleteLastElement(),
//             length(),
//             sort(),
//             reverse(),
//             }
// tree ------------------------

// function makeCopy(item) {
//   return copyArr.push(item);
// }
// function findNumber(elem) {
//   return elem < 3;
// }

// function reducer(acc, currentValue) {
//   return acc + currentValue;
// }

// function filtred(elem) {
//   return elem < 3;
// }
