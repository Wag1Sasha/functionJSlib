function filter(arr, func) {
  newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArray.push(arr[i]);
    } else {
      continue;
    }
  }
  return newArray;
}

module.exports = filter;
