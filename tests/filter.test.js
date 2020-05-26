const filter = require("../lib/filter");

test("filter numbers < 25:", () => {
  const arr = [1, 66, 22, 3, 8, 41, 26, 5];
  function filterNumbers(elem) {
    return elem < 25;
  }
  expect(filter(arr, filterNumbers)).toEqual(arr.filter(filterNumbers));
});

test("filter strings length :", () => {
  const arr = ["string", "boolean", "num", "void"];
  function filterString(elem) {
    return elem.length < 5;
  }
  expect(filter(arr, filterString)).toEqual(arr.filter(filterString));
});

test("filter negative numbers < 25:", () => {
  const arr = [-1, 66, -3, 25, 8, -33, 24, 5];
  function filterNegativeNumbers(elem) {
    return elem < 25;
  }
  expect(filter(arr, filterNegativeNumbers)).toEqual(arr.filter(filterNegativeNumbers));
});
