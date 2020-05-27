function compact(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      if (arr[i].length > 1) {
        newArray.push(arr[i]);
      }
    } else if (typeof arr[i] === "number") {
      if (isNaN(arr[i])) {
        continue;
      } else {
        newArray.push(arr[i]);
      }
    } else if (typeof arr[i] === "boolean") {
      if (arr[i] === false) {
        continue;
      } else {
        newArray.push(arr[i]);
      }
    }
  }
  return newArray;
}

module.exports = compact;
