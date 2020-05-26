const map = require("../lib/map");

test("Multiply each number by two:", () => {
  const arr = [1, 2, 3];
  function multiplier(value) {
    return value * 2;
  }
  expect(map(arr, multiplier)).toEqual(arr.map(multiplier));
});
test("Count length of each string in array:", () => {
  const arr = ["single", "once", "page"];
  function lengthCounter(value) {
    return value.length;
  }
  expect(map(arr, lengthCounter)).toEqual(arr.map(lengthCounter));
});
