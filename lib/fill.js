let arr = [1, 2, 3, 4, 5, 6];

function fill(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = value;
  }
  return arr;
}

module.exports = fill;
