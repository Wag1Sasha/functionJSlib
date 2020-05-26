let arr = [1, 2, 3];
let copy = [];

function forEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}


module.exports = forEach;
