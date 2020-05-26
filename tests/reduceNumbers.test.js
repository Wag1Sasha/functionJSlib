const reduceNumbers = require("../lib/reduceNumbers");

test("sum of numbers with initValue:", () => {
  const arr = [1, 2, 3];
  function reducer(acc, currentValue) {
    return acc + currentValue;
  }

  expect(reduceNumbers(arr, reducer, 15)).toBe(arr.reduce(reducer, 15));
});

test("sum of numbers without initValue:", () => {
  const arr = [1, 2, 3];
  function sum(acc, currentValue) {
    return acc + currentValue;
  }

  expect(reduceNumbers(arr, sum)).toBe(arr.reduce(sum));
});

test("reducer with negative numbers:", () => {
  const arr = [-1, -2, +3];
  function sumAcc(acc, currentValue) {
    return acc + currentValue;
  }

  expect(reduceNumbers(arr, sumAcc)).toBe(arr.reduce(sumAcc));
});

test("reducer multiplier numbers with initValue:", () => {
  const arr = [1, 2, 3];
  function multiplyAcc(acc, currentValue) {
    return acc * currentValue;
  }
  expect(reduceNumbers(arr, multiplyAcc, 10)).toBe(arr.reduce(multiplyAcc, 10));
});
