const compact = require("../lib/compact");
const _ = require("lodash");

test("Creates an array with all falsey values removed. The values false, null, 0, undefined, and NaN are falsey.", () => {
  let arr = [1, "", 3, undefined, "true", NaN, false, true, 5, "else"];
  expect(compact(arr)).toEqual(_.compact(arr));
});
