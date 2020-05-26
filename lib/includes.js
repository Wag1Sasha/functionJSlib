function includes(arr, searchElement) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchElement) {
      return true;
    } else {
      continue;
    }
  }
  return false;
}

module.exports = includes;
