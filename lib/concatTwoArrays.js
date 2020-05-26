module.exports = concat;

function concat(arr, arr2) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    newArray.push(arr2[j]);
  }
  return newArray;
}
