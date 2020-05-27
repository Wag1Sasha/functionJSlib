const slice = require("./slice");

function chunk(arr, size) {
  var result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(slice(arr, i, i + size));
  }
  return result;
}
module.exports = chunk;
