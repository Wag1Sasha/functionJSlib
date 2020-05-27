const chunk = require("../lib/chunk");
const _ = require("lodash");

test("array with 2 chunks", () => {
  let array = [1, 2, 3, 4];
  expect(chunk(array, 2)).toEqual(_.chunk(array, 2));
});

test("array with 2 chunks but 3 elements in array ", () => {
  let array = [1, 2, 3];
  expect(chunk(array, 2)).toEqual(_.chunk(array, 2));
});
