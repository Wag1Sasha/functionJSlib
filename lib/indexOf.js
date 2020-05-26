function indexOf(arr, searchElement) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchElement) {
      return i;
    } else {
      continue;
    }
  }
  return -1;
}

module.exports = indexOf;


