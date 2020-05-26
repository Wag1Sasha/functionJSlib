const includes = require("../lib/includes");

test("includes number in array", () => {
  const arr = [2, 5, 77, 24, 15, 22, 31, 4];
  expect(includes(arr, 155)).toBe(arr.includes(155));
});

test("includes number in array", () => {
  const arr = [2, 5, 77, 24, 15, 22, 31, 4];
  expect(includes(arr, 122)).toBe(arr.includes(122));
});
