const indexOf = require("../lib/indexOf");

test("IndexOf number in array", () => {
  const arr = [2, 5, 77, 24, 15, 22, 31, 4];

  expect(indexOf(arr, 15)).toBe(arr.indexOf(15));
});

test("IndexOf string in array", () => {
  const arr = ["word", "boss", "lord", "guess"];

  expect(indexOf(arr, "boss")).toBe(arr.indexOf("boss"));
});

test("IndexOf number in array", () => {
  const arr = [2, 5, 77, 24, 15, 22, 31, 4];

  expect(indexOf(arr, 155)).toBe(arr.indexOf(155));
});
