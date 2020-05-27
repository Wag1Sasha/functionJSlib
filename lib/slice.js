function slice(arr, begin, end) {
  let newArray = [];
  for (let i = begin ? begin : 0; i < arr.length; i++) {
    if (!end) {
      newArray.push(arr[i]);
    }
    if (i < end) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

module.exports = slice;
