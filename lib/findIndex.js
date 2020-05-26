
function findIndex(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    } else {
      continue;
    }
  }
  return -1;
}

module.exports = findIndex;
