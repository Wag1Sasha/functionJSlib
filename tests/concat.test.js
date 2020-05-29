const concat = require("../lib/concat");

test("concat two array with numbers", () => {
  const arr = [1, 3, 5, 7, 8];
  const arr2 = [2, 6, 9];

  expect(concat(arr, arr2)).toEqual(arr.concat(arr2));
});

test("concat two array with strings", () => {
  const arr = ["this", "is", "insane"];
  const arr2 = [2, 6, 9];

  expect(concat(arr, arr2)).toEqual(arr.concat(arr2));
});
