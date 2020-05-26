const fill = require("../lib/fill");

test("fill all elements of array number 2", () => {
  let arr = [1, 2, 3];
  expect(fill(arr, 2)).toEqual(arr.fill(2));
});
