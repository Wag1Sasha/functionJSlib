const forEach = require("../lib/forEach");

test("copy array with forEach", () => {
  let arr = [1, 2, 3, 4];
  let copy = [];
  function copyArray(item) {
    return copy.push(item);
  }
  expect(forEach(arr, copyArray)).toEqual(arr.forEach(copyArray));
});
