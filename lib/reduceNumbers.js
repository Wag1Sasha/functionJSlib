function reduceNumbers(arr, func, initValue) {
  let acc = null;
  initValue ? (acc = initValue) : (acc = 0);
  for (let i = 0; i < arr.length; i++) {
    acc = func(acc, arr[i]);
  }
  return acc;
}

module.exports = reduceNumbers;
