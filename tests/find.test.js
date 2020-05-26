const find = require("../lib/find");

test("find first number < 3 :", () => {
  const arr = [1, 5, 2, 3, 15, 22, 31];
  function findNumber(elem) {
    return elem < 3;
  }
  expect(find(arr, findNumber)).toEqual(arr.find(findNumber));
});

test("find first number < -3 :", () => {
  const arr = [1, 5, 2, 3, 15, 22, 31];
  function findWithNegativeNumber(elem) {
    return elem < -3;
  }
  expect(find(arr, findWithNegativeNumber)).toEqual(
    arr.find(findWithNegativeNumber)
  );
});

test("find first string with length > 5 :", () => {
  const arr = ["Kenye", "Robin", "Admiral", "Marshal"];
  function findString(elem) {
    return elem.length < 3;
  }
  expect(find(arr, findString)).toEqual(arr.find(findString));
});

test("find object with id=7 :", () => {
  const arr = [];
  const bb = { id: 42, name: "42" };
  for (let i = 0; i < 10; i++) {
    arr.push({
      id: i,
      name: `${i}`,
    });
  }
  arr.push(bb);
  function findObject(elem) {
    return elem.id === 42;
  }
  expect(find(arr, findObject)).toEqual(arr.find(findObject));
});
