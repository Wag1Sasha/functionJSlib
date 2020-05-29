module.exports = concat;

function concat(arr, ...rest) {
  let newArray = [...arr];
  rest.map((v) => {
    newArray.push(...v);
  });
  return newArray;
}

