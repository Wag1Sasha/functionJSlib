const slice = require("../lib/slice");

test("slice with end arg ", () => {
  let array = [1, 2, 3, 4, 6, 7, 8];
  expect(slice(array, 2, 3)).toEqual(array.slice(2, 3));
});
test("slice without end arg", () => {
  let array = [1, 2, 3, 4];
  expect(slice(array, 0)).toEqual(array.slice(0));
});
