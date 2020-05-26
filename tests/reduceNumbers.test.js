const reduceNumbers = require("../lib/reduceNumbers");

test("sum of numbers with initValue:", () => {
  const arr = [1, 2, 3];
  function reducer(acc, currentValue) {
    return acc + currentValue;
  }

  expect(reduceNumbers(arr, reducer, 15)).toBe(21);
});

test("sum of numbers without initValue:", () => {
  const arr = [1, 2, 3];
  function reducer(acc, currentValue) {
    return acc + currentValue;
  }

  expect(reduceNumbers(arr, reducer)).toBe(6);
});

test("reducer with negative numbers:", () => {
  const arr = [-1, -2, +3];
  function reducer(acc, currentValue) {
    return acc + currentValue;
  }

  expect(reduceNumbers(arr, reducer)).toBe(0);
});

test("reducer multiplier numbers with initValue:", () => {
  const arr = [1, 2, 3];
  function reducer(acc, currentValue) {
    return acc * currentValue;
  }
  expect(reduceNumbers(arr, reducer,10)).toBe(60);
});
